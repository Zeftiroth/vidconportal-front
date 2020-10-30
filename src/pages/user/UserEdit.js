import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import axios from "axios";
import LoginContext from "../../context/LoginContext";
import { GetUser } from "../../actions/userActions";

function UserEdit() {
    const userInfo = useSelector((state) => state.userInfo);
    console.log(userInfo)
    let { loginData, setLoginData } = useContext(LoginContext);
    let history = useHistory();
    let uid = loginData.data
    console.log(uid)
    const dispatch = useDispatch();
    // dispatch(GetUser());
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("auth-token");
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL +
          `users/update/${uid.data._id}`,
        {
          username: username,
          email: email,
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(GetUser(uid.data._id));
        setLoginData({
            data: res
        })
        
        
        // history.push("/userProfile");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div>
        <div>Edit user account</div>
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
          <button type="submit">
              Edit
          </button>
        </form>
      </div>
    </>
  );
}

export default UserEdit;
