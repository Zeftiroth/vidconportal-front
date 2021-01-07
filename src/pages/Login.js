import React from 'react'
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "typeface-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/opins-icon.css";
import "../assets/css/animate.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "swiper/swiper-bundle.min.css";

import Layout from "../components/layout";
import InnerHeader from "../components/inner-header";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";



function Login() {
    let history = useHistory();
    const home = e => {
        e.preventDefault()
        history.push("/authRouting")
    }
    return (
	      <Layout>
      <InnerHeader />
      <PageHeader  title="Login" crumbtext="Login / Sign up"/>
	     <section className="blog-details-page">
       <Container>
          <Row>
            <Col lg={5}>
	   <form style={{backgroundColor:'#668696',color: 'white', padding:'15px'}}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
	 </Col>
	  <Col lg={1}></Col>
	   <Col lg={6}>
	    <form  style={{backgroundColor:'#F58220',color: 'white', padding:'15px'}}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" />
                </div>

                <div className="form-group">
                    <label>Mobile No</label>
                    <input type="text" className="form-control" placeholder="Enter Mobile Number" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-white btn-block">Sign Up</button>
                
            </form>
	   </Col>
	 
	 </Row>
	
	 </Container>
	  </section>
      <Footer />
    </Layout>
    )
}

export default Login
