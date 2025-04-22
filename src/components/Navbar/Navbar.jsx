import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../assets/Images/Logo/rings.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="" width="30" height="30" className="me-2" />
            Wedding Wizz
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/halls"
                >
                  Halls
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <button className="btn rounded-5" type="submit">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/Login"
              >
                Log in
              </NavLink>
            </button>
            <button className="btn ms-3 rounded-5" type="submit">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/Register"
              >
                Sign Up
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
