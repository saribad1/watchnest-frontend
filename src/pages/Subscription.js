import { useNavigate } from "react-router-dom";
import "./Subscription.css";
function Subscription() {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    localStorage.setItem("subscribed", "true");

    alert("Subscription activated!");

    navigate("/detect",{replace: true});
  };

  return (
    <div className="subscription-page">
      <h2>Choose Your Plan</h2>

      <div className="plan-box">
        <h3>Premium Plan</h3>
        <p>Unlimited mood-based recommendations</p>
        <p>HD Streaming</p>
        <p>Rs. 999/month</p>

        <button onClick={handleSubscribe}>
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default Subscription;