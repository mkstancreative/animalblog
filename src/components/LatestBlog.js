import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";


function LatestBlog({ id, imageUrl, title, description, excerptLatestBlog }) {
  
  return (
    <>
      <Link to={`/pages/blog-details/${id}`} className="latestblog-link" data-aos="fade-left">
        <Col className="latestblog-block">
          <Col className="latestblog-img">
            <img src={imageUrl} alt={title} />
          </Col>
          <Col className="latestblog-text">
          <h4 id="title-t">{title}</h4>
          <p>{excerptLatestBlog(description)}</p>
          
          <h5>Read More</h5>

          </Col>
        </Col>
      </Link>
    </>
  );
}

export default LatestBlog;
