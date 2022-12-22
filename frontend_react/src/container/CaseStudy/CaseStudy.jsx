import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import PropTypes from "prop-types";

import './CaseStudy.scss';

const CaseStudy = (props) => {
  const { work } = props;
  console.log(work);
  return (
    <>
      <h1 id="test">Case Study</h1>
    </>
  )
}

CaseStudy.propTypes = {
  work: PropTypes.object
}


export default CaseStudy