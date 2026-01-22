import React from "react";
import "../styles/Contact.css";
import concertData from "../components/concertData"; // import your separate data file

function Concerts({ concerts = concertData }) {
  return (
    <section className="concerts-container">
      <h1 className="concerts-title">Upcoming Concerts</h1>

      {concerts && concerts.length > 0 ? (
        <ul className="concerts-list">
          {concerts.map((concert, index) => (
            <li key={index} className="concert-item">
              {/* Poster */}
              {concert.poster && (
                <img
                  src={concert.poster} // public folder path, e.g. /posters/concert1.jpg
                  alt={`${concert.venue} poster`}
                  className="concert-poster"
                />
              )}

              {/* Date and Details */}
              <div className="concert-date">{concert.date}</div>
              <div className="concert-details">
                <span className="concert-venue">{concert.venue}</span>
                {concert.city && <span className="concert-city">{concert.city}</span>}
              </div>

              {/* Ticket Link */}
              {concert.link && (
                <a
                  href={concert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="concert-link"
                >
                  Tickets / Info
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="concerts-empty">No upcoming concerts at the moment. Stay tuned!</p>
      )}
    </section>
  );
}

export default Concerts;
