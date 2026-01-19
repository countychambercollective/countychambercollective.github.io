import { useState } from 'react'
import LOGO from './assets/LOGO.svg'
import LOGOpic from './assets/logopic.jpeg'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Concerts from "./pages/Concerts";


function App() {
  return (
    <Router>
      <div id="bottomNav">
        <img src={LOGO} alt="County Chamber Collective Logo" />
        <h1 id="navContent">The County Chamber Collective</h1>
        <nav id="navLinks">
          <Link to="/">Home</Link>{" "}
          <Link to="/concerts">Concerts</Link>{" "}
          <Link to="/about">About</Link>{" "}
        </nav>
      </div>

      <div id="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
