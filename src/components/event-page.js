import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventPagination from "../components/event-pagination";
import BlogCard from "./cards/event-card";
import eventImage1 from "../assets/images/blog-1-1.png";


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
     image: eventImage1,
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
    image: eventImage1,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and  ",
    link: "/eventDetails"
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
     image: eventImage1,
    update: "30 december, 2020",
    date: "30 december, 2020",
    time: "10.30 AM",
    title: "Lorem Ipsum is simply dummy text of the printing and  ",
    link: "/FrontEventDetails"
  }
];

const EventPage = () => {
  return (
 
    <section className="blog-style-one blog-page" id="blog">
      <Container>
        <Row>
          {EVENT_DATA.map(
            ({ image, update, date, time, title, text, link }, index) => (
              <Col key={`event-card-${index}`} lg={6} md={6} sm={12}>
                <BlogCard
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
		<br/>
        <EventPagination />
      </Container>
    </section>
  );
};

export default EventPage;
