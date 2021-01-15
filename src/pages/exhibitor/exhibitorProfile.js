import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetExhibitor } from "../../actions/userActions";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LoginContext from "../../context/LoginContext";

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

import Table from 'react-bootstrap/Table';

function ExhibitorProfile() {
  
  let { loginData, setLoginData } = useContext(LoginContext);
  console.log(loginData);
  const dispatch = useDispatch();
  const exhiInfo = useSelector((state) => state.exhiInfo);
  let history = useHistory();
  // let uid = loginData.login.id
  // console.log(uid)
  // useEffect(() => {
  //     axios
  //   .get(process.env.REACT_APP_BACKEND_URL + `users/${uid}`,)
  //   .then( (response) => {
  //     console.log(response.data);
  //     setUserDetails(response.data)
  //     console.log(userDetails)
  //   } )
  // }, [])

  const handleRedirect = (e) => {
    e.preventDefault();
    history.push("/exhibitorEdit");
  };

  return (
    
		 <Layout>
      <InnerHeader />
      <PageHeader  title="Participant List" crumbtext="Participants"/>
     <section className="blog-details-page">
       <Container>
          <Row>
		   <Col lg={12}>
        <h3>Exhibitor Profile</h3>
        {loginData.data ? (
        
     <Table striped bordered hover responsive>
	 <tr><td>Username:</td><td>{loginData.data.data.username}</td></tr>
     <tr><td>Email:</td><td>{loginData.data.data.email}</td></tr>
      <tr><td>Name:</td><td>{loginData.data.data.name}</td></tr>
       <tr><td>Organization:</td><td>{loginData.data.data.organization}</td></tr>
      <tr><td>Designation:</td><td>{loginData.data.data.designation}</td></tr>
      <tr><td>Address:</td><td>{loginData.data.data.address}</td></tr>
         <tr><td>Office Number:</td><td>{loginData.data.data.office}</td></tr>
          <tr><td>Mobile Number:</td><td>{loginData.data.data.mobile}</td></tr>
          <tr><td>Fax Number:</td><td>{loginData.data.data.fax}</td></tr>
         <tr><td>Category:</td><td>{loginData.data.data.type}</td></tr>
        <tr><td>Diet:</td><td>{loginData.data.data.diet}</td></tr>
            <tr><td colspan="2">
              <button
                className="btn btn-outline-dark my-3"
                onClick={handleRedirect}
              >
                Edit
              </button>
           </td></tr>
         </Table>
        ) : (
          <div>Loading</div>
		  
        )
		 }
     
       </Col>
	 
	 </Row>
	
	 </Container>
	  </section>
	    <Footer />
    </Layout>
  );
}

export default ExhibitorProfile;
