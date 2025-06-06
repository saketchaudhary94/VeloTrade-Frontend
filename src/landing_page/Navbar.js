import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div class="container p-2">
        <div className="logo">
          <Link class="navbar-brand" to="/">
            <img
              src="media/images/logo.png"
              style={{ width: "25%" }}
              alt="logo image"
            />
          </Link>
        </div>
        <div class="collapse navbar-collapse links" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  active" to="/product">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  active" to="/support">
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
