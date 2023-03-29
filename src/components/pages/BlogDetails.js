import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row} from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/blogdetails.scss";
import Footer from "../Footer";

function BlogDetails() {
  const [blog, setBlog] = useState([]);
  const [relatedPost, setRelatedPost] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  // EFFECT THAT SHOW THE BLOG DETAILS 
  useEffect(() => {
    if (id) {
      ShowBlogDetails();
    }
  }, [id]);

  const ShowBlogDetails = async () => {
    // FETCHING THE BLOG DETAILS
    const response = await axios.get(`http://localhost:5000/blogs/${id}`);

    // FETCHING THE RELATED POST
    const relatedPostData = await axios.get(
      `http://localhost:5000/blogs?category=${response.data.category}&_start=0&_end=3`
    );

    if (response.status === 200 || relatedPostData.status === 200) {
      setBlog(response.data);
      setRelatedPost(relatedPostData.data);
    } else {
      toast.error("Somethings");
    }
  };

  // console.log("data", blog);

  const handleDelete = async () => {
    if (window.confirm("Do You Want to Delete this Blog")) {
      const response = await axios.delete(`http://localhost:5000/blogs/${id}`);
      if (response === 200) {
        alert("Blog Deleted Successfully");
        // setBlog(response.status);
      } else {
        toast.error("Something Went Wrong");
      }
      history.push("/");
    }
  };

  // ReadMore For Related Post
  const excerptLatestBlog = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 50) + "...";
    }
    return str;
  };

  return (
    <>
      <Container className="blog-details">
        {/* <h1>{id}</h1> */}
        {blog && (
          <>
            <Col className="blog-title" data-aos="zoom-in">
              <Link to="/" id="goBack">Go Back</Link>
              <h2>{blog.title}</h2>
       
              <span id="blogdate">{blog.date}</span>
              <span id="blog-author">Written By: {blog.author} </span>
              <br></br>
              <br></br>
              <br></br>
              <span id="catego">{blog.category}</span>
              </Col>
           
            <Col className="blog-img" data-aos="zoom-in">
              <img src={blog.imageUrl} />
            </Col>
            <Col className="blog-text" data-aos="zoom-up">
              <p>{blog.description}</p>
              <button id="delete" onClick={() => handleDelete(blog.id)}>Delete Blog</button>
              <Link to={`/pages/editblog/${blog.id}`}>
                <button id="edit">Edit Blog</button>
              </Link>
            </Col>
          </>
        )}
      </Container>
      {relatedPost && relatedPost.length > 0 ? (
        <Container className="relatedblog">
          <Row className="relatedblog-row">
          {relatedPost.length > 1 && <h1 id="rtitle">Related Post</h1>}
          {relatedPost
            .filter((item) => item.id != id)
            .map((item, index) => (
              <Card key={index} className="relatedblog-post">
                <Card.Img src={item.imageUrl} />
                <Link className="relatedblog-link" to={`/pages/blog-details/${item.id}` }>
                  <h1>{item.title}</h1>
                  <p>{excerptLatestBlog(item.description)}</p>
                </Link>
              </Card>
            ))}
          </Row>
        </Container>
      ): ""}

      <Footer />
    </>
  );
}

export default BlogDetails;
