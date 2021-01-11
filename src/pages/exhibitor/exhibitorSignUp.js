import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetExhibitor } from "../../actions/exhibitorActions";
import LoginContext from "../../context/LoginContext";
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


function ExhibitorRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [designation, setDesignation] = useState("");
  const [address, setAddress] = useState("");
  const [office, setOffice] = useState("");
  const [mobile, setMobile] = useState("");
  const [fax, setFax] = useState("");
  const [diet, setDiet] = useState("");
  let { loginData, setLoginData } = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postPackage = {
      username,
      email,
      password,
      passwordConfirm,
      name,
      organization,
      designation,
      address,
      office,
      mobile,
      fax,
      diet
      
    };
    if (
      !email ||
      !password ||
      !username ||
      !name ||
      !organization ||
      !designation ||
      !address ||
      !office ||
      !mobile ||
      !fax
    ) {
      alert('Not all fields filled')
    } else if (password != passwordConfirm) {
      alert("Password and Confirm Password do not match")
    }
      
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + `exhibitors/register`, {
        postPackage,
      })
      .then((res) => {
        console.log(res.data);
        alert(`Successfully register exhibitor ${res.data.username}`);
      })
      .catch((err) => {
        console.log(err);
        alert(`Failed to register`);
      });
    axios
      .post(process.env.REACT_APP_BACKEND_URL + `exhibitors/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setLoginData = {
          token: response.data.token,
          data: response.data.data,
        };
        // dispatch(GetUser(loginData));
        localStorage.setItem("auth-token", response.data.token);
      })
      .catch((err) => {
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
		 <h3>Register new exhibitor account</h3>
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

          <input className="form-control" placeholder="Enter Email"
            value={email}
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
		  </div>
		   <div className="form-group">
                    <label>Password</label>
        
          <input className="form-control" placeholder="Enter Password"
            value={password}
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
		  </div>
		     <div className="form-group">
                    <label>Confirm Password</label>
     
          <input className="form-control" placeholder="Enter Confirm Password"
            value={passwordConfirm}
            type="text"
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
          />
		  </div>
		     <div className="form-group">
                    <label>Name</label>
         
          <input className="form-control" placeholder="Enter Name"
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
		  </div>
		     <div className="form-group">
                    <label>Organization</label>
      
          <input className="form-control" placeholder="Enter Organization"
            value={organization}
            type="text"
            onChange={(e) => {
              setOrganization(e.target.value);
            }}
          />
		  </div>
		  <div className="form-group">
                    <label>Designation</label>
        
          <input className="form-control" placeholder="Enter Designation"
            value={designation}
            type="text"
            onChange={(e) => {
              setDesignation(e.target.value);
            }}
          />
		  </div>
		  
		   <div className="form-group">
                    <label>Address</label>
          <input className="form-control" placeholder="Enter Address"
            value={address}
            type="text"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
		  </div>
		  
		    <div className="form-group">
                    <label> Office Number</label>

          <input className="form-control" placeholder="Enter Office Number"
            value={office}
            type="text"
            onChange={(e) => {
              setOffice(e.target.value);
            }}
          />
		  </div>
		     <div className="form-group">
                    <label> Mobile Number</label>
          
          <input className="form-control" placeholder="Enter  Mobile Number"
            value={mobile}
            type="text"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
		  </div>
		  
		    <div className="form-group">
                    <label> Fax Number</label>
          <div> </div>
          <input className="form-control" placeholder="Enter Fax Number"
            value={fax}
            type="text"
            onChange={(e) => {
              setFax(e.target.value);
            }}
          />
		  </div>
		  
		    <div className="form-group">
                    <label>Diet</label>
         
          <select className="form-control" placeholder="Enter Diet"
           
            
            value={diet}
            onChange={(e) => {
              setDiet(e.target.value);
            }}
          >
            <option
             
              value="non-vegetarian"
            >
              Non-Vegetarian
            </option>
            <option
              
              value="vegetarian"
            >
              Vegetarian
            </option>
            
          </select>
</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
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

export default ExhibitorRegister;
