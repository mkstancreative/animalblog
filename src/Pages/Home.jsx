import React from "react";
import Search from "../Components/Search/Search";
import Hero from "../Components/Hero/Hero";
import "../assets/style.scss";
import { AnimalProvider } from "../Context/AnimalContext";
import BlogCard from "../Components/BlogCard/BlogCard";
import Category from "../Components/Category/Category";

function Home() {
  return (
    <>
      <Search />
      <Hero />
      <div className="wrapper">
        <div className="wrap_block1">
          <h3>Categories</h3>
          <ul>
            <AnimalProvider>
              <Category />
            </AnimalProvider>
          </ul>
        </div>
        <div className="wrap_block2">
          <AnimalProvider>
            <BlogCard />
          </AnimalProvider>
        </div>
      </div>
    </>
  );
}

export default Home;
