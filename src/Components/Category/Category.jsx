import React from "react";
import { useAnimalData } from "../../Context/AnimalContext";

function Category() {
  
  const { data } = useAnimalData();

  const categories = [...new Set(data.map((item) => item.category))];
  return (
    <>
      {categories.map((category) => {
        const count = data.filter((item) => item.category === category).length;
        return (
          <li key={category}>
            {category} <span>{count}</span>
          </li>
        );
      })}
    </>
  );
}

export default Category;
