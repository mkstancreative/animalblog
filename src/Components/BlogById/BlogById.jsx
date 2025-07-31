import React from "react";
import { useAnimalData } from "../../Context/AnimalContext";

function BlogById() {
  const { selectedItem } = useAnimalData();
  console.log(selectedItem);

  if (!selectedItem) {
    return <p>No Available Data.... </p>;
  }

  return (
    <>
      <div key={selectedItem.id}>
        <span>By: {selectedItem.author}</span>
        <span>Date: {selectedItem.createdAt}</span>
        <div>
          <img src={selectedItem.imageurl} alt="" />
        </div>
        <div>
          <h1>{selectedItem.title}</h1>
          <p>{selectedItem.description}</p>
        </div>
      </div>
    </>
  );
}

export default BlogById;
