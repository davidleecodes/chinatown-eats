import React from "react";
import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark "
      style={{ backgroundColor: "#b30011" }}
      aria-label="Eighth navbar example"
    >
      <div className="container">
        <a className="navbar-brand mb-0 h1 fw-bold" href="#">
          CHINATOWN CHEAP EATS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end flex-grow-1">
            <li className="nav-item">
              <NavLink className="nav-link " exact to="/">
                Episodes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
