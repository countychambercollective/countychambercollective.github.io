import React from "react";

export default function Media() {
  return (
    <div className="media-page">
      <header>
        <h1>Media Gallery 📸</h1>
      </header>

      <main className="media-grid">
        {/* Example media items — replace with your actual media */}
        <img src="/media/photo1.jpg" alt="Media 1" />
        <img src="/media/photo2.jpg" alt="Media 2" />
        <img src="/media/photo3.jpg" alt="Media 3" />
      </main>
    </div>
  );
}
