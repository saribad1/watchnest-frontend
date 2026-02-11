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
    <div className="second-page">
      <div className="left-section"></div>

      <form className="register-box" onSubmit={handleSubmit}>
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

        <button type="submit">Sign In</button>
      </form>

      <div className="right-section"></div>
    </div>
  );
}

export default Signin;