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
import ServiceCard from "../components/cards/features-card";
import Footer from "../components/footer";


const SERVICES_DATA = [
  {
    icon: "opins-icon-smartphone",
    title: "Feature Heading",
    text:
      "Lorem Ipsum is simply dummy text of the printing and simply dummy text."
   
  },
  {
    icon: "opins-icon-smartphone-1",
    title: "Feature Heading",
    text:
      "Lorem Ipsum is simply dummy text of the printing and simply dummy text.",
   
  },
  {
    icon: "opins-icon-smartphone-2",
    title: "Feature Heading",
    text:
      "Lorem Ipsum is simply dummy text of the printing and simply dummy text.",
    
  }
];



function Features() {
    let history = useHistory();
    const home = e => {
        e.preventDefault()
        history.push("/authRouting")
    }
    return (
	      <Layout>
      <InnerHeader />
      <PageHeader  title="Features" crumbtext="Features - FAQ"/>
	<section className="services-style-one" id="service">
      <Container>
        <Row>
          {SERVICES_DATA.map(({ icon, title, text, link }, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <ServiceCard icon={icon} title={title} text={text} link={link} />
            </Col>
          ))}
        </Row>
		 <Row>
          {SERVICES_DATA.map(({ icon, title, text, link }, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <ServiceCard icon={icon} title={title} text={text} link={link} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
      <Footer />
    </Layout>
    )
}

export default Features
