import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isLoggedIn");
  const subscribed = localStorage.getItem("subscribed");

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  if (!subscribed) {
    return <Navigate to="/subscription" />;
  }

  return children;
}

export default ProtectedRoute;