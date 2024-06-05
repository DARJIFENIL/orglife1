import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faBehance,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div className="headerdesign">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.behance.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faBehance} />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-5 design">
        <div className="row">
          <div className="col-6 d-flex justify-content-center align-items-center">
            {/* <img
              src="C:\Users\fenil\Desktop\orglife\orgapp\org-life-1-(1).png"
              alt="Logo"
              className="img-fluid"
              style={{ height: "251px", width: "251px" }}
            /> */}
            <img
              src={process.env.PUBLIC_URL + "/org-life-1-(1).png"}
              alt="Logo"
              className="img-fluid"
              style={{ height: "251px", width: "251px" }}
            />
          </div>
          <div className="col-6 d-flex flex-column justify-content-center">
            <h1 className="designfont">
              <span>Design</span>
              <span>&amp; Engine</span>
              <span>—Erigng</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
