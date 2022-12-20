import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text" id="head-text-about">I Know That It's Not Just A <span>Website.</span><br /> It's An <span>Experience.</span>
      </h2>
      <div className="about-text">
        <p className="p-text">Hello! My name is Helen and I love contributing to the most influential invention of our time- the Internet. My interest in all things digital media began in middle school when I won a logo design contest for a local auction company and the prize was a Nikon Coolpix digital camera. From there, my creative interests evolved from graphic design to multimedia arts and videography and ultimately landed in the field of web development. I am passionate about optimizing systems and creating digital interactions that feel natural and seamless. </p>
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
   'about',
   "app__whitebg"
   );