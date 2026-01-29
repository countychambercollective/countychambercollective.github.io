import React from "react";
import "../styles/Pages.css";

export default function CurrentMembers() {
  return (
    <div className="members-page">
      <header>
        <h1>County Chamber Collective Members</h1>
      </header>

      <ul className="members-list">
        <li className="justifyRight">
          <h2>Diana Lam (flute/arrangements)</h2>
          <img src="../posters/Diana-Lam.jpg" alt="Diana Lam: Flute." />
          <p>Diana was Associate Performance Faculty at Carleton University, and is Suzuki trained and Keyfest certified. <br /> <br />Diana has recently performed with The Belleville Theatre Guild, ShatterBox Theatre, and the Kingston Symphony. She is also involved in several chamber music collaborations, runs her own private studio, and even works as a flute technician. <br /> <br />Diana moved to Prince Edward County in 2021, and, inspired by the El Sistema philosophy, founded Quintissimo with Amber Walton-Amar. Diana has a BMus and MMus degrees in Flute Performance.</p>
        </li>

        <li className="justifyLeft">
          <h2>Caroline Reiss (viola)</h2>
          <img src="../posters/Caroline-Reiss.jpg" alt="Caroline Reiss: Viola" />
          <p>Caroline is an avid violist who is passionate about classical music and bringing music to everyone, especially youth. She particularly enjoys playing Baroque music. 
          <br /><br /> Caroline is currently the principal violist with Orchestra Kingston and plays with the Queens Symphony Orchestra. She has also played with Quinte Symphony, Orchestra Toronto, and the PSO. She also got to play the Alpine Symphony with NYCO which had 100 players, including 4 Wagner horns and a wind machine! 
          <br /><br />In her day job, Caroline runs a wedding venue in Prince Edward County and is a mom to three rambunctious boys.</p>
        </li>

        <li className="justifyRight">
                    <h2>Liz Tremblay (cello)</h2>
          <img src="../posters/Liz-Tremblay.jpg" alt="Liz Tremblay: Cello" />
          <p>Liz Tremblay has recently arrived in the County after a very busy music scene in
Calgary. Originally from Great Britain, Liz trained at the Guildhall School of Music and
Drama and later worked for the Menuhin Foundation of Bermuda, teaching and
performing around the island.
<br /> <br />She recently won the position of Music Director at St Mary Magdalene church in Picton
and has accompanied for the Cantabile Choirs of Kingston as well as Canta Arya. She
teaches cello, piano and theory from her studio, County Music Matters and is delighted
to collaborate with local musicians.</p>
        </li>

        <li className="justifyLeft">
          <h2>Vi Woo (violin/piano/arrangements)</h2>
          <img src="../posters/Vi-Woo.jpg" alt="Vi Woo: Piano, Violin, Arrangements" />
          <p> Vi is a musician and accessibility specialist. They have a bachelors of music from McGill and digital accessibility specialization from Mohawk College. Their work focuses on bringing music and art in an accessible and comfortable format. 
          <br /> <br />
          Vi is often seen in the quinte west volunteering or organizing. They co-host a sing-along in Belleville and recently collaborated with Common Grounds and the County Arts Lab to facilitate a drop in jam session in the Picton Farmers market. They are an avid knitter/crocheter and are often pondering about multi-modal art and community building.   
          </p>
         </li>
        {/* Add more as needed */}
      </ul>
    </div>
  );
}
