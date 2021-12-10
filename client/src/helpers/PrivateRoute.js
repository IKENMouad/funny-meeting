import { Navigate } from "react-router-dom";

function PrivateRoute({ children, currentUser, authPages = false }) {
  const auth = !!(currentUser.token && currentUser.user);
  if (!authPages) {
    return auth ? children : <Navigate to="/auth/login" />;
  } else {
    return auth ? <Navigate to="/" /> : children;
  }
}

export default PrivateRoute;
