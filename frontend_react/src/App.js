import React, { useState } from 'react';
import { Home, CaseStudy } from './container';
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';

const App = () => {

const [selectedWork, setSelectedWork] = useState(null);

const handleChangingSelectedWork = (work) => {
  setSelectedWork(work);
}

  return (
    <div className="app">
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home onClickingView={handleChangingSelectedWork}/>} />
            <Route path="/case-study" element={<CaseStudy work={selectedWork}/>} />
          </Routes>
      </Router>
    </div>
  )
}

export default App