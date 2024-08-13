import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Nav = () => {
    return (
        <div>
            <nav>
        <Link className='logo' to="/life-goal-react" ><motion.h1
        initial={{y:'-5vh'}}
        animate={{y:0}}
        transition={{type:'spring',stiffness:60, duration:1}}
        >GoalMaster</motion.h1></Link>
        <motion.div className='links'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{type:'spring',stiffness:100, duration:1}}>
          <Link to="/life-goal-react"><motion.p
          whileHover={{scale:1.2,color:'#EA906C'}}
          >Home</motion.p></Link>
          <Link to="/life-goal-react/lists"><motion.p
          whileHover={{scale:1.2,color:'#EA906C'}}
          >Lists</motion.p></Link>
          <Link to="/life-goal-react/contact"><motion.p
          whileHover={{scale:1.2,color:'#EA906C'}}
          >Contact</motion.p></Link>
        </motion.div>
      </nav>
        </div>
    );
}

export default Nav;
