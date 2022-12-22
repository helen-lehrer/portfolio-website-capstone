import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';
import './Navbar.scss';
import Resume from './../../assets/pdf/Resume.pdf';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="http://localhost:3000/">HL.</a>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`} id={`app__navbar-li-${item}`}>
            <div />
            <a
            href={`http://localhost:3000/#${item}`}
            id={`app__navbar-link-${item}`}
            >{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0]}}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} className={item} onClick={() => setToggle(false)}>{item}</a>
                  </li>
              ))}
              <li>
                <a href={Resume} target="_blank" 
                rel="noreferrer" id="resume-button">
                Resume (PDF)
                </a> 
              </li>
              <li>
                <a
                href="https://github.com/helen-lehrer"
                target="_blank"
                rel="noreferrer">
                  <BsGithub id="app__navbar-menu-github"/>
                </a>
              </li>
              <li>
                <a
                href="https://www.linkedin.com/in/helen-lehrer/"
                target="_blank"
                rel="noreferrer">
                  <BsLinkedin id="app__navbar-menu-linkedin"/>
                </a>
              </li>
            </ul>
            
          </motion.div>
          
        )}
      </div>
    </nav>
  )
}

export default Navbar