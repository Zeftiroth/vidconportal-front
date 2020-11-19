import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../context/LoginContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const [adminEmail, setAdminEmail] = useState("");
  const [pass, setPass] = useState("");
  const { setLoginData } = useContext(LoginContext);

  const handleEmailChange = (e) => {
    setAdminEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:5000/admins/login`, {
        email: adminEmail,
        password: pass,
      })
      .then((res) => {
        console.log(res);
        setLoginData({
          token: res.data.token,
          login: res.data.login,
        });
        localStorage.setItem("auth-token", res.data.token);
        history.push("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <div>Admin Login</div>
        <form onSubmit={handleSubmit}>
          <div>Admin Email</div>
          <input
            type="text"
            value={adminEmail}
            onChange={handleEmailChange}
          ></input>
          <div>Password</div>
          <input type="text" value={pass} onChange={handlePassChange}></input>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
