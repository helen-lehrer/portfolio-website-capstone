import React from 'react';

import { Home, CaseStudy } from './container';
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-study" element={<CaseStudy />} />
            {/* work={selectedWork} */}
          </Routes>
      </Router>
    </div>
  )
}

export default App