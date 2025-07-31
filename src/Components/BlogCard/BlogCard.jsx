import React from "react";
import { useAnimalData } from "../../Context/AnimalContext";
// import img from "../../assets/image/img.png";
// import img from "../../assets/image/dog-trainer.jpg";
import "./BlogCard.scss";
import { Link } from "react-router-dom";

function BlogCard() {
  const { data } = useAnimalData();

  if (data.length === 0) {
    return <p>Loading......</p>;
  }

  return (
    <>
      {data.map((edata) => (
        <Link
          to={`/blog_details/${edata.id}`}
          key={edata.id}
          className="wrap_card_link"
        >
          <div className="wrap_card">
            <div>
              <img src={edata.imageurl} alt="" />
            </div>
            <div>
              <span>{edata.category}</span>
              <span>{edata.createdAt}</span>
              <h4>{edata.title}</h4>
              <p>{edata.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default BlogCard;
