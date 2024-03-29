import React, {useState, useEffect} from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';
import { Link } from "react-router-dom";
import { images } from '../../constants';
import PropTypes from "prop-types";

const Work = (props) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [workURL, setWorkURL] = useState('');

  const { onClickingView } = props;

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])
  

  const handleWorkFilter = (item) => {
      setActiveFilter(item);
      setAnimateCard([{y:100, opacity: 0}]);

      setTimeout(() => {
        setAnimateCard([{ y:0, opacity: 1 }]);

        if(item ==='All') {
          setFilterWork(works);
        } else {
          setFilterWork(works.filter((work) => work.tags.includes(item)))
        }
      }, 500);
  }
  return (
    <>
      <h2 className="head-text">My Portfolio
      </h2>
      <div className="app__work-filter">
        {['JS/React', 'C#/.NET', 'All'].map((item, index) => (
          <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork
          .sort((a, b) => {
            if (a.sort < b.sort) {
              return -1;
            } else if (a.sort > b.sort) {
              return 1;
            } else {
              return 0;
            }
          })
          .map((work, index) => (
          <div 
          className="app__work-item app__flex"
          key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{opacity: [0,1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                  whileInView={{scale: [0, 1]}}
                  whileHover={{scale: [1,0.9]}}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">     
              {work.projectLink ? (
              <div className="app__work-heading">
                <img src={images.live} alt={"live_icon"} width="30px" />
                <a href={work.projectLink} target="_blank" className="bold-text" rel="noreferrer">
                {work.title}</a>
              </div>) : (
                <h4>{work.title}</h4>
              )}
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              {work.thingsILearned ? (
                 <Link to="/case-study" onClick={()=>onClickingView(work)}>
                 <p className="p-text" style={{ marginTop: 10 }}>Lessons Learned</p>
              </Link>
              ) : null}
              <div className="app__work-tag app__flex">
                
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

Work.propTypes = {
  onClickingView: PropTypes.func,
  work: PropTypes.string
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
   'work',
   "app__primarybg"
   );