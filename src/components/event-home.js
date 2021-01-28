import { Container, Row, Col } from "react-bootstrap";
import EventCard from "./cards/event-card";
import BlockTitle from "./block-title";
import eventImage1 from "../assets/images/blog-1-1.png";
import eventImage2 from "../assets/images/blog-1-2.png";
import eventImage3 from "../assets/images/blog-1-3.png";
import eventTitleCircle from "../assets/images/round-circle-1-8.png";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { useHistory } from "react-router-dom";
import axios from "axios";

const EVENT_DATA = [
  {
    image: eventImage1,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and  ",
    link: "/FrontEventDetails",
  },
  {
    image: eventImage2,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and ",
    link: "/FrontEventDetails",
  },
  {
    image: eventImage3,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and  ",
    link: "/FrontEventDetails",
  },
  {
    image: eventImage1,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and  ",

    link: "/FrontEventDetails",
  },
  {
    image: eventImage2,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and  ",
    link: "/FrontEventDetails",
  },
  {
    image: eventImage3,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and  ",
    link: "/FrontEventDetails",
  },
];
const EventHome = () => {
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
    <section className="blog-style-one" id="blog">
      <Container>
        <BlockTitle
          textAlign="center"
          image={eventTitleCircle}
          title={`Our Latest Events`}
        />
        <Row>
          {list.map(({ image, update, date, time, name, text, _id }, index) => (
            <Col key={`event-card-${index}`} lg={4}>
              <EventCard
                image={image}
                update={update}
                date={convertDate(date)}
                time={convertDate(date)}
                title={name}
                text={text}
                link={`/FrontEventDetails/${_id}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default EventHome;
