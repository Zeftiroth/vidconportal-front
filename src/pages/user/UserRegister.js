import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetUser } from "../../actions/userActions";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import "typeface-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/opins-icon.css";
import "../../assets/css/animate.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "swiper/swiper-bundle.min.css";

import Layout from "../../components/layout";
import InnerHeader from "../../components/inner-header";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";


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
    <Layout>
      <InnerHeader />
      <PageHeader  title="New User" crumbtext="Registration"/>
	     <section className="blog-details-page">
       <Container>
          <Row>
		   <Col lg={4}></Col>
            <Col lg={4}>
        <form onSubmit={handleSubmit} style={{backgroundColor:'#668696',color: 'white', padding:'15px'}}>
		 <h3>Register new user account</h3>
           <div className="form-group">
                    <label>Username</label>
          <input className="form-control" placeholder="Enter UserName"
            value={username}
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
		  </div>
  <div className="form-group">
                    <label>Email</label>
          <input className="form-control" placeholder="email"
            value={email}
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
		  </div>
		  <div className="form-group">
                    <label>Password</label>
         
          <input className="form-control" placeholder="password"
            value={password}
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
		  </div>
		    <div className="form-group">
                    <label>Confirm Password</label>
      
          <input className="form-control" placeholder="Confirm password"
            value={passwordConfirm}
            type="text"
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
          />
		  </div>
          <div>
            <button type="submit" className="btn btn-primary btn-block">Create</button>
          </div>
        </form>
     </Col>
	 
	   <Col lg={4}>
	    </Col>
	 
	 </Row>
	
	 </Container>
	  </section>
      <Footer />
    </Layout>
  );
}

export default UserRegister;
