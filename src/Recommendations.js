import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const MOVIES_BY_MOOD = {
  "Happy 😊": [
    {
      title: "The Intern",
      poster: "https://image.tmdb.org/t/p/w300/9sVtYh2b2H3m7Xw4Z5qk5PZkz9Y.jpg",
    },
    {
      title: "Yes Man",
      poster: "https://image.tmdb.org/t/p/w300/jz7r7ZQ8m7jXKpGkzZzJ5r2gYFZ.jpg",
    },
    {
      title: "Paddington",
      poster: "https://image.tmdb.org/t/p/w300/wlUuZ0Yp7l6pE6g6zF6k5dE5XXA.jpg",
    },
  ],

  "Sad 😔": [
    {
      title: "The Pursuit of Happyness",
      poster:
        "https://image.tmdb.org/t/p/w300/f6l9rghSHORKWluruUGJhaKAiyY.jpg",
    },
    {
      title: "Forrest Gump",
      poster:
        "https://image.tmdb.org/t/p/w300/saHP97rTPS5eLmrLQEcaNmKrsF1.jpg",
    },
    {
      title: "A Beautiful Mind",
      poster:
        "https://image.tmdb.org/t/p/w300/zwzWCmH7205C9NA0jpqW5Zjya8.jpg",
    },
  ],

  "Neutral 😐": [
    {
      title: "Inception",
      poster:
        "https://image.tmdb.org/t/p/w300/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },
    {
      title: "Interstellar",
      poster:
        "https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      title: "The Social Network",
      poster:
        "https://image.tmdb.org/t/p/w300/n0ybibhJtQ5iCq1psErtcnNx.jpg",
    },
  ],
};

export default function Recommendations({ mood }) {
  const navigate = useNavigate();

  const movies = MOVIES_BY_MOOD[mood] || [];

  return (
    <div className="recommendations-page">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Recommended for You
      </h2>

      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div key={index} className="movie-card">
              <img
                src={movie.poster}
                alt={movie.title}
                className="movie-poster"
              />
              <p className="movie-title">{movie.title}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>
            No recommendations available.
          </p>
        )}
      </div>

      {/* SAFE BUTTON — DOES NOT TOUCH ANY LOCKED LOGIC */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          className="primary-btn"
          onClick={() => navigate("/dashboard")
          }
        >
          Take Me Home
        </button>
      </div>
    </div>
  );
}