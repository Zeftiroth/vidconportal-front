import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetUser } from "../../actions/userActions";
import { useHistory } from "react-router-dom";
import axios from "axios";

function UserRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postPackage = { username, email, password, passwordConfirm };
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + `users/register`, {
        postPackage,
      })
      .then(async (res) => {
        console.log(res.data);
        alert(`Successfully register user ${res.data.username}`);
      })
      .catch((err) => {
        console.log(err.message);
        alert(`Failed to register`);
      });
    axios
      .post(process.env.REACT_APP_BACKEND_URL + `users/login`, {
        email: email,
        password: password,
      })
      .then( (response) => {
        console.log(response.data);
         let loginData = {
          token: response.data.token,
          data: response
        };
        dispatch(GetUser(loginData));
        localStorage.setItem("auth-token", response.data.token);
      }).catch(err => {
        console.log(err.message);
      });
      
  };

  return (
    <div>
      <div>
        <div>Register new user account</div>
        <form onSubmit={handleSubmit}>
          <div>Username</div>
          <input
            value={username}
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

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
          <div> Confirm Password </div>
          <input
            value={passwordConfirm}
            type="text"
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
          />
          <div>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
