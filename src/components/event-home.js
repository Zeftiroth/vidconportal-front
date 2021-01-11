import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCard from "./cards/event-card";
import BlockTitle from "./block-title";
import eventImage1 from "../assets/images/blog-1-1.png";
import eventImage2 from "../assets/images/blog-1-2.png";
import eventImage3 from "../assets/images/blog-1-3.png";
import eventTitleCircle from "../assets/images/round-circle-1-8.png";

const EVENT_DATA = [
  {
    image: eventImage1,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and  ",
    link: "/FrontEventDetails"
  },
  {
    image: eventImage2,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and ",
    link: "/FrontEventDetails"
  },
  {
    image: eventImage3,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and  ",
    link: "/FrontEventDetails"
  },
    {
    image: eventImage1,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and  ",
   
    link: "/FrontEventDetails"
  },
   {
    image: eventImage2,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and  ",
    link: "/FrontEventDetails"
  },
    {
    image: eventImage3,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and  ",
    link: "/FrontEventDetails"
  }
];
const EventHome = () => {
  return (
    <section className="blog-style-one" id="blog">
      <Container>
        <BlockTitle
          textAlign="center"
          image={eventTitleCircle}
          title={`Our Latest Events`}
        />
        <Row>
          {EVENT_DATA.map(
            ({ image, update, date, time, title, text, link }, index) => (
              <Col key={`event-card-${index}`} lg={4}>
                <EventCard
                  image={image}
                  update={update}
                  date={date}
                  time={time}
                  title={title}
                  text={text}
                  link={link}
                />
              </Col>
            )
          )}
        </Row>
      
      </Container>
    </section>
  );
};






export default EventHome;
