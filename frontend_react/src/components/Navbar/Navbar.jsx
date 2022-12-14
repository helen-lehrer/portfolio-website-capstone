import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  let nav = {
    'home': {color: '#ff0000a7'},
    'about': {color: '#ffbb0089'},
    'work': {color: '#00800073'},
    'skills': {color: '#00b7ff7c'},
    'contact': {color: '#4c008269'},
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>HL.</h1>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`} id={`app__navbar-li-${item}`}>
            <div />
            <a
            href={`#${item}`}
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
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar