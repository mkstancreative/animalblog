import React from "react";
import { Link } from "react-router-dom";
import AdminBlogList from "../Components/AdminBlogList/AdminBlogList";
import { AnimalProvider } from "../Context/AnimalContext";

function Admin() {
  return (
    <>
      <div className="admin_wrapper">
        <div className="sideBar">
          <Link to="/admin" className="sidebar_brand">
            Zico Animal <span>World</span>{" "}
          </Link>
          <ul>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/create_blog">Create Blog</Link>
            </li>
          </ul>
        </div>
        <div className="admin_main">
          <AnimalProvider>
            <AdminBlogList />
          </AnimalProvider>
        </div>
      </div>
    </>
  );
}
export default Admin;
