import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/aboutUs.scss";
import Footer from "../Footer";

export default function ContactUs() {
  return (
    <>
      <Container className="contact-cont">
        <Row>
          <Col md={6}>
            <Col md={8} className="sendmail" data-aos="zoom-in">
              <h4>Send Email</h4>
              <a id="sendmail" href="mailto:zicoanimalworld@gmail.com">
                ziconimalworld@gmail.com
              </a>
            </Col>
          </Col>
          <Col md={6} data-aos="zoom-in">
            <Col md={8} className="callus">
              <h4>Call Us Now </h4>
              <a id="callus" href="tel:+2347068265165">
                {" "}
                +234-746-438-37
              </a>
            </Col>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
