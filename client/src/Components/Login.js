import React, { useState } from "react";
import "../assets/css/login.css";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../actions/loginAction";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "mouad@gmail.com",
    password: "password",
    rememberMe: false,
  });

  const currentUser = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(loginForm))
  };
  return (
    <div id="loginform">
      <form onSubmit={handleSubmit}>
        <h2 id="headerTitle">Login</h2>
        <div>
          { JSON.stringify(currentUser.user)  }
          <div className="row">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
            />
          </div>
          <div className="row">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
            />
          </div>

          <div id="button" className="row">
            <button type="submit">Log in</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
