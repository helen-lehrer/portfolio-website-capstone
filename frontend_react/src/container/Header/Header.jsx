import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import ReactTooltip from 'react-tooltip'; 
import './Header.scss';
import Tooltip, { tooltipClasses }  from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const scaleVariants = {
  whileInView:{
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));


const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1]}}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            {/* <span>👋</span> */}
            <div style={{ marginLeft:20 }}>
              <p className="p-text">Hello, I am</p>
              <span className="head-text">Helen Lehrer{" "}</span>
            </div>
          </div>

            <div className="tag-cmp app__flex">
              <p className="p-text">Web Developer</p>
              <p className="p-text">Full-Stack</p>
            </div>
          </div>
      </motion.div>
        
      <motion.div
        whileInView={{opacity: [0,1]}}
        transition={{ duration: 0.5, delayChildren: 0.5}}
        className="app__header-img">
          <img src={images.profile} alt="profile_bg" />
          <motion.img
            whileInView={{scale: [0,1]}}
            transition={{ duration: 1, ease: 'easeInOut'}}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
      </motion.div> 
  
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
   
        {[{"image": images.node, "tooltip": "Node.js"}, {"image": images.react, "tooltip": "React"}, {"image": images.dotnet, "tooltip": "Dotnet"}].map((circle, index) => (
          <>
          <HtmlTooltip title={circle["tooltip"]} placement="right-end">
          <div className="circle-cmp app__flex" key={`circle-${index}`} data-tip  data-for={`circle-${index}`}>
            <img src={circle["image"]} alt="profile_bg" />
          </div>
          </HtmlTooltip>
          </>
        ))}
      </motion.div> 
    </div>
  )
};

export default AppWrap(Header, 'home');