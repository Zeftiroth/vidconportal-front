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
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../context/LoginContext";

import axios from "axios";

function Login() {
  let history = useHistory();
  const home = (e) => {
    e.preventDefault();
    history.push("/authRouting");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let { loginData, setLoginData } = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(process.env.REACT_APP_BACKEND_URL + `exhibitors/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setLoginData({
          token: response.data.token,
          data: response,
        });
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
      <PageHeader title="Login" crumbtext="Login / Sign up" />
      <section className="blog-details-page">
        <Container>
          <Row>
            <Col></Col>
            <Col lg={5}>
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "#668696",
                  color: "white",
                  padding: "15px",
                }}
              >
                <h3>Sign In</h3>

                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    type="text"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    type="text"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  {/* <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember me
                      </label>
                    </div> */}
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
                <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
                </p>
              </form>
            </Col>
            <Col></Col>
            {/* <Col lg={6}>
              <form
                style={{
                  backgroundColor: "#F58220",
                  color: "white",
                  padding: "15px",
                }}
              >
                <h3>Sign Up</h3>

                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>

                <div className="form-group">
                  <label>Mobile No</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Mobile Number"
                  />
                </div>

                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <button type="submit" className="btn btn-white btn-block">
                  Sign Up
                </button>
              </form>
            </Col> */}
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
}

export default Login;
