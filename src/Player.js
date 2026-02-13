import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./Player.css";

export default function Player() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="player-page">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="player-wrapper">
        <video
          ref={videoRef}
          className="player-video"
          controls
        >
          <source src="/videos/inception.mp4" type="video/mp4" />
        </video>
      </div>

    </div>
  );
}