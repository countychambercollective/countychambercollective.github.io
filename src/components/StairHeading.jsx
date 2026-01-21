// components/StairHeading.jsx
import "../styles/stairs.css";

export default function StairHeading({ words }) {
  const count = words.length;

  return (
    <h1 className="stairs fill">
      {words.map((word, i) => (
        <span
          key={i}
          className="stair"
          style={{
            "--i": i,
            "--count": count - 1 || 1,
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}
