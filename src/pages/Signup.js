import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://watchnest-backend-production.up.railway.app/api/register",
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
        }
      );

      alert("Registration successful!");

      // ✅ STORE LOGIN STATE
      localStorage.setItem("isLoggedIn", "true");

      // ✅ NEW USERS NOT SUBSCRIBED YET
      localStorage.setItem("subscribed", "false");

      navigate("/subscription",{replace: true});

    } catch (error) {
      console.error(error.response?.data);
      alert("Registration failed");
    }
  };

 return (
  <div className="second-page">
    {/* LEFT SIDE */}
    <div className="left-section">
      <div className="logo-slash"> {'//'}</div>

      <form className="register-box" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
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

        <label>Re-enter Password</label>
        <input
          type="password"
          placeholder="Re-enter password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>

    {/* RIGHT SIDE */}
    <div className="right-section"></div>
  </div>
);
}

export default Signup;