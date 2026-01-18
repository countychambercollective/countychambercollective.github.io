import { useState } from 'react'
import LOGO from './assets/LOGO.svg'
import LOGOpic from './assets/logopic.jpeg'
import './App.css'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "src/pages/Home.jsx";
import About from "src/pages/About";
import Events from "src/pages/Events";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div id="bottomNav">
        <h1>The County Chamber Collective</h1>
      <Router className="container">
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/events">Upcoming Events</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" elements={<Events />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
