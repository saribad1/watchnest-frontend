import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../home.css";

function Home() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Navigate to signup page and pass email
    navigate("/signup", { state: { email } });
  };

  return (
    <div className="hero">

      {/* 🔥 TOP RIGHT SIGN IN BUTTON */}
      <div className="home-header">
        <button
  type="button"
  className="secondary-btn"
  onClick={() => navigate("/signin")}
>
  Sign In
</button>
      </div>

      <div className="hero-overlay">
        <h2>WatchNest, a hub for movies and shows</h2>
        <p>Watch shows personalized to your day-to-day mood.</p>

        <form onSubmit={handleSubmit} className="hero-form">

  <input
    type="email"
    placeholder="Ready to register? Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="hero-input"
  />

  <button type="submit" className="hero-submit">
    Submit
  </button>

</form>
      </div>
    </div>
  );
}

export default Home;