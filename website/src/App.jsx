import { useState } from 'react'
import LOGO from './assets/LOGO.svg'
import LOGOpic from './assets/logopic.jpeg'
import './App.css'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import home from "./pages/home";
import about from "./pages/about";
import events from "./pages/events";

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
            <Route path="/" element={<home />} />
            <Route path="/events" elements={<events />} />
            <Route path="/about" element={<about />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
