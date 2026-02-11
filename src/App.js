import ProtectedRoute from "./components/ProtectedRoute.js";
import Subscription from "./pages/Subscription.js";
import Dashboard from './Dashboard.js';
import Player from './Player.js';
import Recommendations from './Recommendations.js';
import Signin from "./pages/Signin.js";
import Home from './pages/Home';
import Signup from './pages/Signup.js';

import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import './App.css';
import logo from './assets/watchnestlogo.png';
import { FaceMesh } from '@mediapipe/face_mesh';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [mood, setMood] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (mood && location.pathname === "/detect") {
      const timer = setTimeout(() => {
        navigate('/recommendations');
      }, 1400);

      return () => clearTimeout(timer);
    }
  }, [mood, navigate, location.pathname]);

  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const faceMeshRef = useRef(null);

  /* =========================
     FACE MESH LOGIC (LOCKED)
  ========================= */
  useEffect(() => {
    faceMeshRef.current = new FaceMesh({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMeshRef.current.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMeshRef.current.onResults((results) => {
      setLoading(false);

      if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
        const landmarks = results.multiFaceLandmarks[0];
        const upperLip = landmarks[13].y;
        const lowerLip = landmarks[14].y;
        const mouthOpen = lowerLip - upperLip;

        let detectedMood = 'Neutral 😐';
        if (mouthOpen > 0.015) detectedMood = 'Happy 😊';
        else if (mouthOpen < 0.01) detectedMood = 'Sad 😔';

        setMood(detectedMood);
        setShowModal(true);
      } else {
        setMood('No face detected');
        setShowModal(true);
      }
    });
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setMood(null);
    setShowModal(false);
    setLoading(true);

    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };

  const handleImageLoad = async () => {
    const image = imageRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    await faceMeshRef.current.send({ image: canvas });
  };

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
  <div className="brand">
    <img src={logo} alt="WatchNest logo" className="brand-logo" />
    <h1 className="logo-text">WatchNest</h1>
  </div>

  {localStorage.getItem("isLoggedIn") === "true" && (
    <button
      className="logout-btn"
      onClick={() => {
        localStorage.clear();
        navigate("/signin");
      }}
    >
      Logout
    </button>
  )}
</header>

      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* SUBSCRIPTION */}
        <Route
          path="/subscription"
          element={
            <ProtectedRoute>
              <Subscription />
            </ProtectedRoute>
          }
        />

        {/* DETECT */}
        <Route
          path="/detect"
          element={
            <ProtectedRoute requireSubscription={true}>
              <div className={`page-content ${showModal ? 'blurred' : ''}`}>
                <main className="hero">
                  <div className="hero-overlay">

                    <h2 className="detect-title">Upload Your Selfie</h2>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />

                    {loading && <p>Detecting mood...</p>}

                    {selectedImage && (
                      <>
                        <img
                          ref={imageRef}
                          src={selectedImage}
                          alt="Uploaded"
                          onLoad={handleImageLoad}
                          style={{ display: 'none' }}
                        />
                        <canvas
                          ref={canvasRef}
                          style={{ display: 'none' }}
                        />
                      </>
                    )}

                  </div>
                </main>
              </div>
            </ProtectedRoute>
          }
        />

        {/* RECOMMENDATIONS */}
        <Route
          path="/recommendations"
          element={
            <ProtectedRoute requireSubscription={true}>
              <Recommendations mood={mood} />
            </ProtectedRoute>
          }
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* PLAYER */}
        <Route
          path="/player"
          element={
            <ProtectedRoute>
              <Player />
            </ProtectedRoute>
          }
        />

      </Routes>

      {/* MODAL */}
      {showModal && location.pathname === '/detect' && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Detected Mood</h2>
            <p className="mood-text">{mood}</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default AppWrapper;