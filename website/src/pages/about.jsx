import React from "react";
import './App.css';

function about() {
    return (
        <main>
        <h1>About the Collective</h1>

        <p>
            We are a collection of musicians ranging from amateurs to professionals. We rotate musicians based on scheduling and playing level. 
        </p>

      <div>
        <h2>What We Do</h2>
        <ul>
          <li>Support local businesses</li>
          <li>Host community events</li>
          <li>Connect members and partners</li>
        </ul>
      </div>

      <div>
        <h2>Current Members</h2>
        <ul>
            <li>Caroline Reiss (viola)</li>
            <li>Diana Lam (flute) </li>
            <li>Vi Woo (violin/piano/arranger)</li>
            <li>Liz Tremblay (cello)</li>
        </ul>
        <button>Become a Member</button>
      </div>
    </main>
    ) 
}

export default about;