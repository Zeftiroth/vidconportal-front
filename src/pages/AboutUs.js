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
import AboutOne from "../components/about-one";
import AboutTwo from "../components/about-two";
import Footer from "../components/footer";



function AboutUs() {
    let history = useHistory();
    const home = e => {
        e.preventDefault()
        history.push("/authRouting")
    }
    return (
	      <Layout>
      <InnerHeader />
      <PageHeader  title="About Us" crumbtext="Company Overview"/>
	 <AboutOne />
     <AboutTwo />
      <Footer />
    </Layout>
    )
}

export default AboutUs
