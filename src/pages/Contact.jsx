import React from "react";
import "../styles/Contact.css";
import EmailForm from "../components/EmailForm";

function Contact() {
  return (
    <section className="contact-container">
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Contact Us
      </h1>

      {/* Instagram Link */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <a
          href="https://www.instagram.com/countychambercollective"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#fff",
            backgroundColor: "#E1306C",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          Follow us on Instagram
        </a>
      </div>

      <EmailForm />
    </section>
  );
}

export default Contact;
