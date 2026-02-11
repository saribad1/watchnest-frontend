import { useNavigate } from 'react-router-dom';
import './App.css';

export default function Player() {
  const navigate = useNavigate();

  return (
    <div className="player-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="player-container">
        <div className="fake-video">
          <p>▶ Playing: The Intern (Demo)</p>
        </div>

        <div className="player-controls">
          <div className="progress-bar">
            <div className="progress"></div>
          </div>

          <div className="controls">
            ⏮️ ⏯️ ⏭️ 🔊 ⚙️
          </div>
        </div>
      </div>
    </div>
  );
}
