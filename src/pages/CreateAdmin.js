import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { AddAdmin } from "../actions/adminActions";

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

function CreateAdmin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const adminAdd = useSelector((state) => state.adminAdd);
  console.log(adminAdd.data);

  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameInput = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordInput = (e) => {
    setConfirmPassword(e.target.value);
  };

  const createAdminInfo = {
    adminName: { firstName, lastName },
    email: email,
    password: password,
    department: department,
  };

  // const backend = process.env.REACT_APP_BACKEND_URL
  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post(`http://localhost:5000/admins/add`, {
    //     adminName: { firstName, lastName },
    //     email: email,
    //     password: password,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     alert(`Admin ${firstName}` + ` ${lastName} created successfully`);
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setPassword("");
    //     setConfirmPassword("");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     // err.response.data.msg && setError(err.response.data.msg)
    //   });
    dispatch(AddAdmin(createAdminInfo));
    alert(`Admin ${firstName}` + ` ${lastName} created successfully`);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <Layout>
      <InnerHeader />
      <PageHeader title="New Admin" crumbtext="Registration" />
      <section className="blog-details-page">
        <Container>
          <Row>
            <Col lg={4}></Col>
            <Col lg={4}>
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "#668696",
                  color: "white",
                  padding: "15px",
                }}
              >
                <div className="form-group">
                  <label>First Name</label>

                  <input
                    className="form-control"
                    placeholder="Enter First Name"
                    value={firstName}
                    type="text"
                    onChange={handleFirstNameInput}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>

                  <input
                    className="form-control"
                    placeholder="Enter Last Name"
                    value={lastName}
                    type="text"
                    onChange={handleLastNameInput}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    placeholder="Enter Email"
                    value={email}
                    type="text"
                    onChange={handleEmailInput}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    className="form-control"
                    placeholder="Enter Password"
                    value={password}
                    type="text"
                    onChange={handlePasswordInput}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    className="form-control"
                    placeholder="Enter Confirm Password"
                    value={confirmPassword}
                    type="text"
                    onChange={handleConfirmPasswordInput}
                  />
                </div>
                <div className="form-group">
                  <label>Department</label>

                  <input
                    className="form-control"
                    placeholder="Enter Department"
                    value={department}
                    type="text"
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Create Admin
                  </button>
                </div>
              </form>
            </Col>

            <Col lg={4}></Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
}

export default CreateAdmin;
