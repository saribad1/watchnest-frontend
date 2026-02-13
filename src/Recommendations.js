import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const MOVIES_BY_MOOD = {
  "Happy 😊": [
    {
      title: "The Intern",
      poster: require("./assets/intern.jpg"),
    },
    {
      title: "Yes Man",
      poster: require("./assets/yesman.jpg"),
    },
    {
      title: "Paddington",
      poster: require("./assets/padd.jpg"),
    },
  ],

  "Sad 😔": [
    {
      title: "The Pursuit of Happyness",
      poster: require("./assets/pursuit.jpg"),
    },
    {
      title: "Forrest Gump",
      poster: require("./assets/forest.jpg"),
    },
    {
      title: "A Beautiful Mind",
      poster: require("./assets/beautifulmind.jpg"),
    },
  ],

  "Neutral 😐": [
    {
      title: "Inception",
      poster: "https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_SY679_.jpg",
    },
    {
      title: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/71yJ5oI6CkL._AC_SY679_.jpg",
    },
    {
      title: "The Social Network",
      poster: "https://m.media-amazon.com/images/I/81D+KJkOZDL._AC_SY679_.jpg",
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
          onClick={() => navigate("/dashboard")}
        >
          Take Me Home
        </button>
      </div>
    </div>
  );
}