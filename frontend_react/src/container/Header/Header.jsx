import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
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
    fontSize: theme.typography.pxToRem(20)
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
            <div style={{ marginLeft:20 }}>
              <p className="p-text">Hello, I am</p>
              <span className="head-text">Helen Lehrer.{" "}</span>
                <p className="p-text">Full-stack developer making magic on the web.</p>
            </div>
          </div>
        </div>
      </motion.div>
        
      <motion.div
        whileInView={{opacity: [0,1]}}
        transition={{ duration: 0.5, delayChildren: 0.5}}
        className="app__header-img">
          <img src={images.profile} alt="profile_bg" />
      </motion.div> 
  
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
   
        {[{"image": images.csharp, "tooltip": "C#/.NET", "id": "0"}, {"image": images.react, "tooltip": "React/Redux", "id": "1"}, {"image": images.javascript, "tooltip": "Javascript/Node.js", "id": "2"}].map((circle, index) => (
          <>
          <HtmlTooltip title={circle["tooltip"]} placement="right">
          <div className="circle-cmp app__flex " id={circle["id"]} key={`circle-${index}`} data-tip  data-for={`circle-${index}`}>
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