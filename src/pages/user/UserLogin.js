import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetUser } from "../../actions/userActions";
import { useHistory } from "react-router-dom";
import LoginContext from "../../context/LoginContext";
import axios from "axios";

function UserLogin() {
  let { loginData, setLoginData } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  let history = useHistory()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postPackage = { email, password, };
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + `users/login`, {
        postPackage,
      })
      .then((res) => {
        console.log(res.data);
        setLoginData = {
          token: res.data.token,
          data: res
        }
        dispatch(GetUser(res.data.data.id));
        localStorage.setItem("auth-token", res.data.token);
        alert(`Successfully login user ${res.data.data.username}`);
      })
      .catch((err) => {
        console.log(err);
        alert(`Failed to login`);
      });
      history.push("/userProfile")
  };

  return (
    <div>
      <div>
        <div className="my-3">Login user account</div>
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

export default UserLogin;
