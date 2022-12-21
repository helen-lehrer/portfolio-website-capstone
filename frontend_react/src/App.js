import React from 'react';

import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
        <Routes>
          
        </Routes>
      </Router>
    </div>
  )
}

export default App