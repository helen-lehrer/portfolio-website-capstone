import React from 'react';
import { urlFor } from '../../client';
import PropTypes from "prop-types";

import './LessonsLearned.scss';

const LessonsLearned = (props) => {
  const { work } = props;
  return (
    <>
      <div className="app__lessonslearned">
        <h1 className="head-text">{work.title} <span>Lessons Learned</span></h1>
        <p className="p-text app__flex app__lessonslearned-desc">{work.description}</p>
        <div className="app__lessonslearned-img">
          <img src={urlFor(work.imgUrl)} alt={work.name} />
        </div>
        <b className="p-text app__flex app__lessonslearned-desc">
          <a href="https://super-pacart.netlify.app/" target="_blank" rel="noreferrer">super-pacart.netlify.app</a>
        </b>
        {work.thingsILearned
          .map((item, index) => (
            <ul className="p-text app__flex app__lessonslearned-desc">
              <li>
                {item}
              </li>
            </ul>
        ))}
      </div>
    </>
  )
}

LessonsLearned.propTypes = {
  work: PropTypes.object
}


export default LessonsLearned