import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import notfound from "./assest/img/notfound.gif";
import "./css/notfound.scss";

function NotFound() {
  return (
    <Container className="NotFound">
      <Row>
        <Col md={6}  className="notfound-text">
          <h1>Sorry this page is Not Found</h1>

          <Link id="notfound-link" to="/"> {"<< "}Back to the Home</Link>
        </Col>
        <Col md={6} className="notfound-img-">
          <img src={notfound} alt="Not Found" />
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
