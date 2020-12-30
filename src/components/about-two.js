import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./block-title";
import blockTitleCircle from "../assets/images/round-circle-1-2.png";
import mocup from "../assets/images/moc.png";

const AboutTwo = () => {
  return (
    <section className="feature-style-two" id="features">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="image-block">
              <img src={mocup} alt="Awesome Image" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="content-block">
              <BlockTitle
                textAlign="left"
                image={blockTitleCircle}
                title={`Our Vision & Mission`}
              />
              <p>
                Duis aute irure dolor in reprehenderit in voluptate <br /> velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <ul className="feature-lists">
                <li>
                  <i className="fa fa-check"></i> Refresing to get such a
                  personal touch.
                </li>
                <li>
                  <i className="fa fa-check"></i> Duis aute irure dolor in
                  reprehenderit in voluptate.
                </li>
                <li>
                  <i className="fa fa-check"></i> Velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </li>
              </ul>
            
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
