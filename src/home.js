import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLists } from './App';
import TypedText from './TypedText';
import { AnimatePresence, motion } from 'framer-motion';
import Nav from './nav';
const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const listNameRef = useRef();
  const { lists, setLists } = useContext(useLists);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  

  const createListBtn = () => {
    const listName = listNameRef.current.value;
    const listImgSrc = selectedImage;
    const id = lists.length+1;

    if (listName) {
      const newList = {
        listName: listName,
        listImgSrc: listImgSrc,
        goals:[],
        id:id
      };
      setLists([...lists, newList]);
      setSelectedImage(null);
      listNameRef.current.value = '';
      document.getElementById('listgoalss').click()
      listNameRef.current.placeholder = "list name...";
    } else {
      listNameRef.current.placeholder = "please enter list name!";
    }
  };

  return (
    <AnimatePresence>
      <Nav/>
    <motion.div className='homee'
    initial={{ x: 0, opacity: 1 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{type:'spring',stiffness:100, duration:5}}
    >
      <TypedText />
      <motion.div className='createList' 
      initial={{x:'-5vw',opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{type:'spring',stiffness:100, duration:1}}
      
      
      >
        <h1>Create List</h1>
        <input ref={listNameRef} type="text" placeholder='list name...' className='inputtext' />
        <input onChange={handleImageChange} type='file' id='upload' accept='image/*' style={{ display: 'none' }} />
        {selectedImage?<button className='upload' onClick={() => document.getElementById('upload').click()}>
          <img className='smallimg' src={selectedImage} alt="" />
        </button>:<button className='upload' onClick={() => document.getElementById('upload').click()}>
          photo+ <span className='option'>(optional)</span></button>
          }
        <button className='create' onClick={createListBtn}>Create</button>
        <Link to={`/listgoals/${lists.length+1}`} id='listgoalss'></Link>
       </motion.div>
    </motion.div>
    </AnimatePresence>
  );
}

export default Home;


