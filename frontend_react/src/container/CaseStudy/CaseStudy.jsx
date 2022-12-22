import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import PropTypes from "prop-types";

import './CaseStudy.scss';

const CaseStudy = (props) => {
  const { work } = props;
  return (
    <>
      <h1 id="test">{work.title}</h1>
      <p>{work.description}</p>
      <div className="app__casestudy-img app__flex">
        <img src={urlFor(work.imgUrl)} alt={work.name} />
      </div>

    </>
  )
}

CaseStudy.propTypes = {
  work: PropTypes.object
}


export default CaseStudy