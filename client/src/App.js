import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import PrivateRoute from "./helpers/PrivateRoute";
import Header from "./Components/Header"; 
import FullScreenDialog from "./Components/FullScreenDialog";
import "./App.scss";

function App() {
  const currentUser = useSelector((state) => state.authReducer);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<FullScreenDialog />} />
          <Route
            exact
            path="/profile"
            element={
              <PrivateRoute currentUser={currentUser}>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/auth/login"
            element={
              <PrivateRoute authPages={true} currentUser={currentUser}>
                <Login />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
