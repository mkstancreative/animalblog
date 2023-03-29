import React from "react";
import BlogList from "./BlogList";
import FeaturedStories from "./FeaturedStories";
import Footer from "./Footer";
import Hero from "./Hero";
import useFetch from "./useFetch";

function Home() {
  const { blogs, isPending, error } = useFetch(
    "https://63ee0369d466e0c18ba77ab1.mockapi.io/blogs"
  );

  return (
    <>
    <Hero />
    <FeaturedStories />
    <Footer />
      {error && <h4>{error}</h4>}
      {isPending && <h2>Loading Blog Post..........</h2>}

      {blogs && <BlogList blogs={blogs} />}
    </>
  );
}

export default Home;
