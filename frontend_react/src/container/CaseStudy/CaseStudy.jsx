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
      </div>
    </>
  )
}

CaseStudy.propTypes = {
  work: PropTypes.object
}


export default CaseStudy