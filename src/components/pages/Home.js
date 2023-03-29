import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import BlogList from "../BlogList";
import Category from "../Category.";
import "../css/home.scss";
import Hero from "../Hero";
import LatestBlog from "../LatestBlog";
import Search from "../Search";
import Footer from "../Footer";
import Aos from "aos";




export default function Hom() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [latestBlog, setLatestBlog] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const options = ["Cats", "Lions", "Tigers", "Horses", "Dogs", "Pets"];

  useEffect(() => {
    loadBlogData();
    fetchLatestBlog();
    Aos.init({duration:2000})

  }, []);

  // FETCHING THE BLOG FROM API
  const loadBlogData = async () => {
    const response = await axios.get("http://localhost:5000/blogs");
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error("something went wrong");
    }
  };

  // FTCHING THE LATEST BLOG
  const fetchLatestBlog = async () => {
    const totalBlog = await axios.get("http://localhost:5000/blogs");
    const start = totalBlog.data.length - 4;
    const end = totalBlog.data.length;

    const response = await axios.get(
      `http://localhost:5000/blogs?_start=${start}&_end=${end}`
    );
    if (response.status === 200) {
      setLatestBlog(response.data);
    } else {
      toast.error("Something Went Wrong");
    }
  };

  // Creating The ReadMore Function
  const excerpt = (str) => {
    if (str.length > 200) {
      str = str.substring(0, 200) + "...";
    }
    return str;
  };

  // ReadMore For Latest Post
  const excerptLatestBlog = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 50) + "...";
    }
    return str;
  };

  // Craating The Search Button onChange Function
  const onSearchInputChange = (e) => {
    if (!e.target.value) {
      loadBlogData();
    }
    setSearchValue(e.target.value);
  };

  // Search Button onSubmit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:5000/blogs?q=${searchValue}`
    );
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error("Something Went Wrong");
    }
  };

  // Fetching Blogs By Categories
  const handleCat = async (category) => {
    const response = await axios.get(
      `http://localhost:5000/blogs?category=${category}`
    );
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error("something Went Wrong");
    }
  };

  // ReFresh Button to Reload the page
  const handleRefresh = () => {
    setRefresh(true);
    loadBlogData();
  };

  // console.log("data", data);
  return (
    <>
      <Search
        handleSumit={handleSubmit}
        onSearchInputChange={onSearchInputChange}
        searchValue={searchValue}
        data-aos={Aos}
      />
      <Hero  />
      {data.length === 0 ? (
        <Container>
          <p>No Blog Post Avaliable...</p>
          {data.length === 0 ? ( <button style={{backgroundColor:'#fff', padding: "10px", color: "#000",}} onClick={() => handleRefresh()}>Refresh</button>) : refresh}
        </Container>
      ) : (
        <>
          <Container fluid style={{ backgroundColor: "#000" }}>
            <Row>

              {/* FEATURED BLOG  */}
              <Col md={8} className="featuredpost">
                <Col md={6} className="block1">
                  <h4 className="featTitle">Featured Stories</h4>
                  <hr></hr>
                </Col>

                <Row className="feat-img-block d-flex justify-content-around" data-aos="fade-up">
                  {data &&
                    data.map((item, index) => (
                      <BlogList key={index} {...item} excerpt={excerpt}  />
                    ))}
                </Row>
              </Col>

              {/* LATEST BLOG  */}
              <Col md={4}>
                <Col className="latestblog" >
                  <h4 id="title">Latest Blog</h4>
                  <hr></hr>
                  {latestBlog &&
                    latestBlog.map((item, index) => (
                      <LatestBlog
                        key={index}
                        {...item}
                        excerptLatestBlog={excerptLatestBlog}
                      />
                    ))}
                </Col>

                {/* CATEGORIES  */}
                <Col data-aos="fade-in-right">
                  <Category options={options} handleCat={handleCat} />
                </Col>
              </Col>
            </Row>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
}
