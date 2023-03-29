import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Footer from "../Footer";

export default function AboutUs() {
  return (
    <>
      <Container className=" about-cont">
        <Col className="about-block1">
          
        </Col>

        <Col className="about-block2" data-aos="zoom-in">
          <h4>Hey there, what’s up?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            accusantium voluptates reprehenderit aut nulla, animi saepe incidunt
            vel magnam velit, repellat perspiciatis nesciunt dolore distinctio?
            Laborum molestiae nesciunt quia deleniti! Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Blanditiis omnis et, eius dolore
            laboriosam asperiores delectus magnam optio esse impedit, odit ipsa
            ex temporibus alias atque numquam veniam cum excepturi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            accusantium voluptates reprehenderit aut nulla, animi saepe incidunt
            vel magnam velit, repellat perspiciatis nesciunt dolore distinctio?
            Laborum molestiae nesciunt quia deleniti! Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Blanditiis omnis et, eius dolore
            laboriosam asperiores delectus magnam optio esse impedit, odit ipsa
            ex temporibus alias atque numquam veniam cum excepturi?
          </p>
          <hr></hr>

          <div>
            <span>
              <BsFacebook />
            </span>
            <span>
              {" "}
              <BsInstagram />
            </span>
            <span>
              {" "}
              <BsTwitter />
            </span>
            <span>
              {" "}
              <BsGithub />
            </span>
          </div>
        </Col>
      </Container>
      <Footer />
    </>
  );
}
