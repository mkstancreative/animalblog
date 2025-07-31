import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbrand">
        <Link to="/">
          Zico Animal <span>World</span>{" "}
        </Link>
      </div>

      <div className="navitems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
