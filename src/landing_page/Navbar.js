import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container p-2">
        <div className="logo">
          <Link className="navbar-brand" to="/">
            <img
              src="media/images/logo.png"
              style={{ width: "25%" }}
              alt="logo"
            />
          </Link>
        </div>
        <div className="collapse navbar-collapse links" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
            <button
  type="button"
  className="btn btn-outline-dark fw-bold px-4 py-2 rounded-pill shadow"
  onClick={() => {
    console.log("Redirecting...");
    window.location.href = "https://velotrade-dashboard.netlify.app/";
  }}
>
  Dashboard
</button>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  active" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
