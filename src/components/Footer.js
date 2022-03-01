import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="py-5">
          <h2 className="text-light">Interesting in working with me</h2>
          <Link to = "/Contact">
          <button className="btn btn-outline-light btn-lg">Let's Talk</button>
          </Link>
        </div>
        <div className="row">
          <div className="col -12 col-md-4 py-3">
            <h5 className="text-info">More links</h5>
            <Link to="/" className="text-light d-block">
              Blogs
            </Link>
            <Link to="/" className="text-light d-block">
              Home
            </Link>
            <Link to="/Contact" className="text-light d-block">
              Contact me
            </Link>
            <Link to="/write-a-recommendation" className="text-light d-block">
              Write a recommendation <i className="fas fa-heart text-light" />
            </Link>
          </div>
          <div className="col-12 col-md-4 text-light text-justify py-3">
            <p>
              ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
              dolorum, voluptatibus eius voluptatum modi cum vero vitae vel
              placeat reprehenderit corporis. Et architecto laborum provident,
              cum enim tempore cumque mollitia.
            </p>{" "}
          </div>
          <div className="col-12 col-md-4">
            <h5 className="text-info">Social</h5>
            <a href="/">
              <i className="fab fa-linkedin text-light h1 d-block" />
            </a>
            <a href="/">
              <i className="fab fa-github text-light h1 d-block" />
            </a>
            <a href="/">
              <i className="fab fa-instagram text-light h1 d-block"></i>
            </a>
          </div>
        </div>
        <div className="text-muted pt-5">
          <p>Copyright Shailendra kumar 2021</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
