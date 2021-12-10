import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


function PrivateRoute({ children, authPages = false }) {
  const currentUser = useSelector((state) => state.authReducer);
  const auth = !!(currentUser.token && currentUser.user);
  if (!authPages) {
    return auth ? children : <Navigate to="/auth/login" />;
  } else {
    return auth ? <Navigate to="/" /> : children;
  }
}

export default PrivateRoute;
