import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import PropTypes from "prop-types";

import './CaseStudy.scss';

const CaseStudy = (props) => {
  const { work } = props;
  return (
    <>
      <div className="app__casestudy">
        <h1 className="head-text">{work.title} <span>Case Study</span></h1>
        <p className="p-text app__flex app__casestudy-desc">{work.description}</p>
        <div className="app__casestudy-img">
          <img src={urlFor(work.imgUrl)} alt={work.name} />
        </div>
        <b className="p-text app__flex app__casestudy-desc">(in progress)</b>
        <p className="p-text app__flex app__casestudy-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </>
  )
}

CaseStudy.propTypes = {
  work: PropTypes.object
}


export default CaseStudy