import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../context/LoginContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import logoImage from "../assets/images/logo.png";

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

      <section className="blog-details-page">
        <Container>
          <Row>
		   <Col lg={4}></Col>
         <Col lg={4}> 
		<br/><center> <img src={logoImage} alt=""  /></center><br/>
		 <h3>Login to Admin Dashboard</h3>
		 <form onSubmit={handleSubmit}>

          <div>Admin Email</div>
          <input className="form-control"
            type="text"
            value={adminEmail}
            onChange={handleEmailChange}
          ></input>
          <div>Password</div>
          <input  className="form-control" type="text" value={pass} onChange={handlePassChange}></input>
          <div>
		  <br/>
            <button type="submit" className="btn btn-white btn-block">Login</button>
          </div>
        </form>
		</Col>
       <Col lg={4}></Col>
	   </Row>
        </Container>
      </section>
  );
}

export default AdminLogin;
