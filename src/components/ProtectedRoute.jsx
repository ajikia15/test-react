import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/UserContext";

// Protected Route Component
export const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, loading, isAuthenticated } = useAuthContext();

  // Show loading while checking auth state
  if (loading) {
    return (
      <div
        className="loading-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "1.2rem",
        }}
      >
        Loading...
      </div>
    );
  }

  // Redirect to home if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // If admin-only route, check if user is admin
  // You can customize this logic based on how you determine admin status
  if (adminOnly && user?.email !== "your-admin-email@gmail.com") {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Component to redirect authenticated users away from auth pages
export const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuthContext();

  if (loading) {
    return (
      <div
        className="loading-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "1.2rem",
        }}
      >
        Loading...
      </div>
    );
  }

  return children;
};

// Component for protecting routes
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthContext(); // Using context now

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
