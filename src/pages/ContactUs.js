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
import BlockTitle from "../components/block-title";
import Layout from "../components/layout";
import InnerHeader from "../components/inner-header";
import PageHeader from "../components/page-header";

import Footer from "../components/footer";



function ContactUs() {
    let history = useHistory();
    const home = e => {
        e.preventDefault()
        history.push("/authRouting")
    }
    return (
	      <Layout>
      <InnerHeader />
      <PageHeader  title="Contact Us" crumbtext="Lets Contact Us"/>
	
    <section className="feature-style-one">
      <Container>
        <hr className="style-one" />
        <Row>
          <Col lg={6}>
            <div className="content-block">
              <br/>
            <h3> Address</h3>

<i class="fa fa-map-marker"></i> 855 road, broklyn street,
Malaysia 600.<br/>
<i class="fa fa-phone"></i> 888 999 0000<br/>
<i class="fa fa-envelope"></i> info@ksi.com<br/><br/>
  <h3> Location on Map</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2172.176866872488!2d101.67725843181938!3d3.150061938886162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49b48effffff%3A0x7ae1c6b0e26aee6d!2sMaybank!5e0!3m2!1sen!2sin!4v1608641191256!5m2!1sen!2sin" width="500" height="350" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </Col>

          <Col lg={6}>
         
              <form>
			  <br/>
                <h3>Let's Contact Us</h3>

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
                    <label>Message</label>
                    <textarea className="form-control" rows="5"  placeholder="Enter Message" />
                </div>

                <button type="submit" className="btn btn-white btn-block">Submit</button>
                
            </form>
          
          </Col>
        </Row>
      </Container>
	   </section>
      <Footer />
    </Layout>
    )
}

export default ContactUs
