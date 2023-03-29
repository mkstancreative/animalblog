import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import back from "./assest/img/back.gif";
import { Col, Container } from 'react-bootstrap';
import img from "./assest/img/img.png";
import img7 from "./assest/img/img7.png";
import img90 from "./assest/img/img90.png";
import "./css/footer.scss";

export default function Footer() {
  return (
    <>
        <Container fluid className='footer'>
            <Col className='footer-block'> 
                <span><BsInstagram /></span> 
                <p> Me On Instagram </p>
            </Col> 
            <Col className='insta-block' data-aos="fade-up">
                <Col md={10} className='insta-img'>
                    <img src={img7} />
                </Col>
                {/* <div className='insta-img'>
                <img src={img7} />

                </div> */}
                {/* <div className='insta-img'></div> */}
                {/* <div className='insta-img'></div> */}
                {/* <div className='insta-img'></div>    */}
            </Col>

            <Col md={11} className='form-sub-cont' style={{backgroundImage: `url(${back})`}} data-aos="fade-in">
                <Col md={9} className='form-sub-block' data-aos="zoom-out">
                    <h3>Get All the Best Hands Delivered to your Inbox</h3>
                    <p>Subcribe to Our Newsletter and stay updated</p>

                    <form>
                        <input type="text" placeholder='Write Your Email Here...' />
                        <button>Subscribe</button>
                    </form>
                </Col>


            </Col>

            <Col className='copyright'>
                <p>CopyRight @ 2023 RedQ, Inc.</p>

            </Col>

        </Container>
    </>
  )
}
