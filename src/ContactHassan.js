import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Nav from './nav';
import {motion} from 'framer-motion'

const ContactHassan = () => {
  return (<>
  <Nav/>

  
    <motion.div className="contact-container"
        initial={{opacity:0 ,y :-5}}
        animate={{opacity:1 , y :0 }}
        transition={{type:'spring',stiffness:50, duration:5000}}
    >
      <h2>Contact Hassan</h2>
      <div className="icon-container">
        <a href="https://www.facebook.com/ELLOL.NET/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://www.instagram.com/hassanmohamed.oo" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/hassan-mohamed-77b9532a5/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
      </div>
    </motion.div>
    </>
  );
};

export default ContactHassan;
