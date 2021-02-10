import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import moc from "../assets/images/banner-mock-up.png";
import Countdown from "../components/Countdown";
import { useHistory } from "react-router-dom";

const currentDate = new Date();
const year =
  currentDate.getMonth() === 11 && currentDate.getDate() > 23
    ? currentDate.getFullYear() + 1
    : currentDate.getFullYear();

const BannerOne = () => {
  let history = useHistory();
  const sendToReg = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    history.push(`exhibitorRegister`);
  };

  return (
    <section className="banner-style-one" id="banner">
      <span className="bubble-1"></span>
      <span className="bubble-2"></span>
      <span className="bubble-3"></span>
      <span className="bubble-4"></span>
      <span className="bubble-5"></span>
      <span className="bubble-6"></span>

      {/*<img src={moc} className="banner-mock" alt="Awesome Image" />  */}
      <Container>
        <Row>
          {/* <Col xl={6} lg={8}>
            <div className="content-block Titleup">
              <h3>IBM Services Virtual Summit</h3>
              <span>
                {" "}
                <i className="fa fa-calendar"></i> 30 DECEMBER, 2020.10.30 AM
              </span>
              <Countdown date={`${year}-12-24T00:00:00`} />
            </div>
            <a
              href="FrontEventDetails"
              class="header-btn BtnView"
              style={{ backgroundcolor: "#668696", color: "white" }}
            >
              View Events
            </a>
          </Col> */}
          <Col></Col>
          <Col xl={6} lg={8}>
            <div class="main">
              <p class="sign" style={{ color: "#668696" }} align="center">
                <span style={{ color: "#668696" }}>You're invited! </span>
                <span style={{ color: "#F68321" }}>Register Today</span>
              </p>
              <form class="form1">
                {/* <input
                  class="pass "
                  type="text"
                  align="center"
                  placeholder="Username"
                ></input>
                <input
                  class="pass"
                  type="text"
                  align="center"
                  placeholder="Email Id"
                ></input>
                <input
                  class="pass"
                  type="number"
                  align="center"
                  placeholder="Mobile Number"
                ></input> */}
                <a class="submit" align="center" onClick={sendToReg}>
                  Sign Up
                </a>
              </form>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerOne;
