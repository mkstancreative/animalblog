import React, { useEffect } from "react";
import "./css/hero.scss";
import Zico from "./assest/img/zico.png";
import {BsFacebook, BsInstagram, BsTwitter,BsGithub} from "react-icons/bs"
import { Col, Container } from "react-bootstrap";

export default function Hero() {
  
  return (
    
    <>
      <Container className="container-fluid hero-cont " >

       <Col md={4} className="hero-img-block" data-aos="zoom-in">
         <Col className="hero-img">
          <img src={Zico} alt="Zico" />
        </Col>
       </Col>

        <Col className="col-md-5 hero-title" data-aos="fade-up">
          <h4>Hey! I'm <span>Ziconimal</span></h4>
          <p>
            Agulue Isaac is currently Professor of Zoology at University of
            Regensburg. <br></br> "Zoology is an active and colorful biological discipline
            with a <br></br>  long history and a promising future.
          </p>
          <Col>
            <span><BsFacebook /></span>
            <span> <BsInstagram /></span>
            <span> <BsTwitter /></span>
            <span> <BsGithub /></span>
          </Col>
        </Col>
      </Container>
      
    </>
  );
}
