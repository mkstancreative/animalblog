import React from "react";
import { useAnimalData } from "../../Context/AnimalContext";

function AdminBlogList() {
  const { data } = useAnimalData();
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((edata) => (
            <tr key={edata.id}>
              <td>{edata.title}</td>
              <td>{edata.author}</td>
              <td>{edata.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AdminBlogList;
