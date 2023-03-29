import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars , AiOutlineClose} from "react-icons/ai";
import "./css/navbar.scss";
import { Col, Container } from "react-bootstrap";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);


  const handleShowMenu = () =>{
    setShowMenu(!showMenu);
  }

  const closeMenu = () =>{
    setShowMenu(false);
  }




  return (
    <>
      <Container fluid className="container-fluid navbar-cont">
        <Col md={4} className="navbrand">
          <h1>Zico Animal<span>World</span></h1>
        </Col>

        <Col md={3} className="menu-icon" onClick={handleShowMenu}>

        <span className="baricon">{!showMenu ? <AiOutlineBars/> : <AiOutlineClose/>}</span>

        </Col>
        <Col md={7} className={showMenu ? "nav-items-active" : "nav-items" } onClick={closeMenu} >
          <ul className="nav-items-block"> 
            <li> <Link to="/" className="navbarlink">Home</Link> </li>
            <li> <Link to="/pages/about-us" className="navbarlink">About Us</Link> </li>
            <li> <Link to="/pages/contact-us" className="navbarlink">Contact Us</Link> </li>
            {/* <li> <Link to="pages/error404" className="navbarlink">404 Page</Link> </li> */}
            <li> <Link to="/pages/addeditblog" className="navbarlink">Add/Edit Blog</Link> </li>
            {/* <li> <Link to="/pages/home" className="navbarlink">Home</Link> </li> */}
            {/* <li> <AiOutlineSearch  className="navbaricon"/> </li> */}
          

          </ul>
        </Col>
      </Container>
    </>
  );
}

export default NavBar;
