import { Container, Row, Col } from "react-bootstrap";
import EventPagination from "../components/event-pagination";
import BlogCard from "./cards/event-card";
import eventImage1 from "../assets/images/blog-1-1.png";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { useHistory } from "react-router-dom";
import axios from "axios";

// const EVENT_DATA = [
//   {
//  image: eventImage1,
//     update: "30 december, 2020",
//     date: "30 december, 2020",
//     time: "10.30 AM",
//     title: "Lorem Ipsum is simply dummy text of the printing and  ",
//     link: "/FrontEventDetails"
//   },
//   {
//      image: eventImage1,
//     update: "30 december, 2020",
//     date: "30 december, 2020",
//     time: "10.30 AM",
//     title: "Lorem Ipsum is simply dummy text of the printing and  ",
//     link: "/FrontEventDetails"
//   },
//   {
//      image: eventImage1,
//     update: "30 december, 2020",
//     date: "30 december, 2020",
//     time: "10.30 AM",
//     title: "Lorem Ipsum is simply dummy text of the printing and  ",
//     link: "/FrontEventDetails"
//   },
//   {
//     image: eventImage1,
//     update: "30 december, 2020",
//     date: "30 december, 2020",
//     time: "10.30 AM",
//     title: "Lorem Ipsum is simply dummy text of the printing and  ",
//     link: "/eventDetails"
//   },
//   {
//      image: eventImage1,
//     update: "30 december, 2020",
//     date: "30 december, 2020",
//     time: "10.30 AM",
//     title: "Lorem Ipsum is simply dummy text of the printing and  ",
//     link: "/FrontEventDetails"
//   },
//   {
//      image: eventImage1,
//     update: "30 december, 2020",
//     date: "30 december, 2020",
//     time: "10.30 AM",
//     title: "Lorem Ipsum is simply dummy text of the printing and  ",
//     link: "/FrontEventDetails"
//   }
// ];

const EventPage = () => {
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
  const convertDate = (e) => {
    let d = new Date(e);
    let date = d.toString();
    return date;
  };
  useEffect(() => {
    fetchEventList();
  }, []);

  return (
    <section className="blog-style-one blog-page" id="blog">
      <Container>
        <Row>
          {list.map(({ image, update, date, time, name, text, _id }, index) => (
            <Col key={`event-card-${index}`} lg={6} md={6} sm={12}>
              <BlogCard
                image={image}
                update={update}
                date={convertDate(date)}
                time={convertDate(date)}
                title={name}
                text={text}
                link={_id}
                _id={_id}
              />
            </Col>
          ))}
        </Row>
        <br />
        <EventPagination />
      </Container>
    </section>
  );
};

export default EventPage;
