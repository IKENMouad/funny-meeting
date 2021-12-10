import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import PrivateRoute from "./helpers/PrivateRoute";
import Header from "./Components/Header";
import "./App.scss";
 import EventList from "./Components/EventList";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<EventList />} />
          <Route
            index
            path="/profile"
            element={
              <PrivateRoute >
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            index
            path="/auth/login"
            element={
              <PrivateRoute authPages={true} >
                <Login />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
      {/* <div className="circle1"></div>
      <div className="circle2"></div> */}
    </div>
  );
}

export default App;
