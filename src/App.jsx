import { useState } from 'react'
import LOGO from './assets/LOGO.svg'
import LOGOpic from './assets/logopic.jpeg'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Concerts from "./pages/Concerts";
import Members from "./pages/Members";
import Media from "./pages/Media";


function App() {
  return (
    <Router>
      <div id="bottomNav">
        <img src={LOGO} alt="County Chamber Collective Logo" />
        <h1 id="navContent">The County Chamber Collective</h1>
        <nav id="navLinks">
          <Link to="/">Home</Link>{" "}
          <Link to="/concerts">Upcoming Concerts</Link>{" "}
          <Link to="/members">Current Members</Link>{" "}
          <Link to="/media">Media</Link>{" "}
          <Link to="/contact">Contact Us</Link>{" "}

        </nav>
      </div>

      <div id="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/members" element={<Members />} />
          <Route path="/media" element={<Media />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
