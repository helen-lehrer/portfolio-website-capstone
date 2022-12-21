import React from 'react';
import Header from './Header/Header'; 
import About from './About/About';
import Work from './Work/Work'; 
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';
import { PropTypes } from 'prop-types';

const Home = (props) => {
  console.log(props);
  const { onClickingView } = props;
  return (
    <>
    <Header test="test"/>
    <About />
    <Work onClickingView={onClickingView} />
    <Skills />
    <Footer />
    </>
  )
}

Home.propTypes = {
  onClickingView: PropTypes.func
}

export default Home