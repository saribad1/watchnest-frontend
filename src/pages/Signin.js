import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../signin.css";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://watchnest-backend-production.up.railway.app/api/login",
        {
          email: email,
          password: password,
        }
      );

      // ✅ STORE AUTH STATE
     localStorage.setItem("token", response.data.access_token);
localStorage.setItem("isLoggedIn", "true");

localStorage.setItem("subscribed", "true"); // ADD THIS

      // ✅ SIGNIN USERS ARE ALREADY SUBSCRIBED
      localStorage.setItem("subscribed", "true");

      alert("Login successful!");
      
      alert("about to navigate...");

      navigate("/detect", {replace: true});

    } catch (error) {
      console.error(error.response?.data);
      alert("Login failed");
    }
  };

 return (
  <div
    className="signin-page"
    style={{
      backgroundImage: `url(${require("../assets/photo2.jpg")})`,
    }}
  >
    <div className="signin-overlay">
      <form className="signin-card" onSubmit={handleSubmit}>
        
        <img
          src={require("../assets/watchnestlogo.png")}
          alt="WatchNest"
          className="signin-logo"
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="signin-btn">
          Sign In
        </button>

      </form>
    </div>
  </div>
);
 
}

export default Signin;