import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import Logo from "./../../assets/Images/logo/rings.png";
import image_1 from "./../../assets/Images/header_images/1.jpg";
import image_2 from "./../../assets/Images/header_images/2.jpg";
import image_3 from "./../../assets/Images/header_images/3.jpg";
import image_4 from "./../../assets/Images/header_images/4.jpg";
import image_5 from "./../../assets/Images/header_images/5.jpg";
import "./Header.css";
import { AuthContext } from "../../context/AuthContext";
import ProfilePopup from "../Navbar/ProfilePopup";

function Header() {
  let { isLogin, setLogin } = useContext(userContext);
  const { userName } = useContext(AuthContext);

  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("userToken");
    setLogin(null);
    navigate("/login");
  }

  return (
    <header>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container">
                  <NavLink className="navbar-brand" to="/">
                    <img
                      src={Logo}
                      alt=""
                      width="30"
                      height="30"
                      className="me-2"
                    />
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
                    <div className="d-flex align-items-center gap-3">
                      {!isLogin ? (
                        <>
                          <NavLink
                            className={({ isActive }) =>
                              `btn rounded-5 ${isActive ? "active" : ""}`
                            }
                            to="/login"
                          >
                            Log in
                          </NavLink>
                          <NavLink
                            className={({ isActive }) =>
                              `btn ms-3 rounded-5 ${isActive ? "active" : ""}`
                            }
                            to="/register"
                          >
                            Sign Up
                          </NavLink>
                        </>
                      ) : (
                        <>
                          <ProfilePopup
                            userName={userName}
                            isLogin={isLogin}
                            logOut={logOut}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </nav>

              <div className="header_content d-block w-100">
                <div className="content">
                  <h1 className="my-5">
                    Experience the Magic of Seamless Planning
                  </h1>
                  <p className="my-5">
                    Where Every Detail is Designed to Make Your Day
                    Extraordinary
                  </p>
                </div>

                <div className="header_image my-5">
                  <div className="container my-5">
                    <div className="row">
                      <div className="col-6 carousel">
                        <img
                          loading="lazy"
                          src={image_1}
                          alt="Weddi g planning details"
                          className="image_1"
                        />
                        <img
                          loading="lazy"
                          src={image_2}
                          alt="Wedding decor elements"
                          className="image_2"
                        />
                        <img
                          loading="lazy"
                          src={image_3}
                          alt="Bridal accessories"
                          className="image_3"
                        />
                        <img
                          loading="lazy"
                          src={image_4}
                          alt="Wedding venue options"
                          className="image_4"
                        />
                        <img
                          loading="lazy"
                          src={image_5}
                          alt="Event planning tools"
                          className="image_5"
                        />
                      </div>
                      <div className="col-6">
                        <div className="last d-flex">
                          <span className="mx-4">2K+</span>
                          <p>Varius sed lacus viverra magna commodo nec diam</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
