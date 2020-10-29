import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

function ExhibitorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let { loginData, setLoginData } = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + `exhibitors/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setLoginData({
          token: response.data.token,
          data: response
        })
        // dispatch(GetUser(loginData));
        localStorage.setItem("auth-token", response.data.token);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div>
        <div className="my-3">Login Exhibitor account</div>
        <form onSubmit={handleSubmit}>
          <div> Email </div>
          <input
            value={email}
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div> Password</div>
          <input
            value={password}
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExhibitorLogin;
