import React, { useContext } from 'react';
import { useLists } from './App';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Nav from './nav';

const Lists = () => {
  const { lists ,setLists} = useContext(useLists);

  const delBtn=(index)=>{
    const Lists = [...lists]
    Lists.splice(index,1)
    setLists(Lists)
  }
 
  return (<>
 
  
   <Nav/>
 
    
    <motion.div className='listsShow'
    initial={{ x: -100, opacity: 1 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 100, opacity: 0 }}
    transition={{type:'spring',stiffness:100, duration:5}}
    >
       
      {lists.length > 0 ? (
        lists.map((list, index) => (
            <div className='listshowdel'>
                <Link to={`/listgoals/${list.id}`} style={{textDecoration:"none"}}>
            <div key={index} className='listShow' >
            {list.listImgSrc?<img src={list.listImgSrc} alt="List" />:<img src="https://img.icons8.com/?size=100&id=wS8OCNb2Fe4L&format=png&color=#2B2A4C" alt="List" />}
            
            <h1 className='listnn'>{list.listName}</h1>
        </div>
          </Link>
            <button className='delBtn' onClick={()=>delBtn(index)}>🗙</button>
            </div>
           
         
          
        ))
      ) : (
        <div className='noLists'><p>No lists available.</p></div>
            
      )}
    </motion.div> </>
  );
}

export default Lists;
