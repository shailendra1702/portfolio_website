import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-white fixed-top">
      <div className="container my-2">
        <Link to="/" className="navbar-brand text-dark font-weight-bold ">
          Shailendra kumar
        </Link>
        <Link to="/Contact" className="ml-auto mx -3">
          <button className="btn btn-outline-info ">contact me</button>
        </Link>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span className="fas fa-bars text-dark"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <a
              href="/"
              className="nav-item nav-link text-dark font-weight-bold h6 mx-1 my-auto"
            >
              Blogs
            </a>
            <a
              href="/all-projects"
              className="nav-item nav-link text-dark font-weight-bold h6 mx-1 my-auto"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
