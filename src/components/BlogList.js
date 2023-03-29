import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function BlogList({ id, title, imageUrl, description, category, excerpt }) {
  return (
    <>
      <Card style={{width:'19rem'}} className="bloglist" data-aos="zoom-out">
        <Card.Img src={imageUrl} alt={title} className="feat-img" />

        <Card.Body>
          <Link to={`/pages/blog-details/${id}`} className="title-block">
            <Card.Title className="title"> {title} </Card.Title>
            <Card.Text className="description">
              {excerpt(description)}
              <span>...Read More{" >>"}</span>
            </Card.Text>
            <h5 className="category">{category}</h5>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
export default BlogList;
