import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Layout from "../../components/layout";
import InnerHeader from "../../components/inner-header";
import PageHeader from "../../components/page-header";
import EventPage from "../../components/event-page";

import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";

function EventList() {
  const [list, setList] = useState([]);
  let token = localStorage.getItem("auth-token");
  const fetchEventList = async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND_URL + `exhibitions`, {
        headers: { "x-auth-token": token },
      })
      .then(async (response) => {
        console.log(response.data);
        let tmpl = response.data;
        await setList(tmpl);
      });
  };
  useEffect(() => {
    fetchEventList();
  }, []);
  let history = useHistory();
  const sendToEvent = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    history.push(`editEvent/${e.target.id}`);
  };
  const sendToCreateEventMeeting = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    history.push(`createMeeting/${e.target.id}`);
  };
  const convertDate = (e) => {
    let d = new Date(e);
    let date = d.toString();
    return date;
  };
  return (
    <Layout>
      <InnerHeader />
      <PageHeader  title="Event Listing" crumbtext="All Events"/>
	  
	   <section className="blog-details-page">
        <Container>
          <Row>
            <Col lg={8}>
             <EventPage />
            </Col>
            <Col lg={4}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </section>
	  
      
      <Footer />
    </Layout>
  );
}

export default EventList;
