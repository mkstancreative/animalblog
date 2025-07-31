import React, { useEffect } from "react";
import SiteMain from "../Components/SiteMain/SiteMain";
import { useParams } from "react-router-dom";
import { AnimalProvider, useAnimalData } from "../Context/AnimalContext";
import BlogById from "../Components/BlogById/BlogById";

function BlogDetails() {
  return (
    <AnimalProvider>
      <BlogDetailsContent />
    </AnimalProvider>
  );
}

function BlogDetailsContent() {
  const { id } = useParams();
  const { fetchAnimalDataById, selectedItem } = useAnimalData();

  useEffect(() => {
    if (id) {
      fetchAnimalDataById(id);
    }
    window.scrollTo(0, 0);
  }, []); // Add dependencies to ensure re-fetching if ID changes

  return (
    <div className="wrap_blog_detail">
      {selectedItem ? <BlogById /> : <p>Loading post...</p>}
      <SiteMain />
    </div>
  );
}

export default BlogDetails;
