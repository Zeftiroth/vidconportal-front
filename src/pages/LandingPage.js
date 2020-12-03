import React from 'react'
import { useHistory } from "react-router-dom";

import "typeface-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/opins-icon.css";
import "../assets/css/animate.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "swiper/swiper-bundle.min.css";

import Layout from "../components/layout";
import HeaderOne from "../components/header-one";
import BannerOne from "../components/banner-one";
import EventHome from "../components/event-home";
import Footer from "../components/footer";



function LandingPage() {
    let history = useHistory();
    const home = e => {
        e.preventDefault()
        history.push("/authRouting")
    }
    return (
	          <Layout>
      <HeaderOne />
   	   <BannerOne />
	   <EventHome />
	   <Footer />
    </Layout>
    )
}

export default LandingPage
