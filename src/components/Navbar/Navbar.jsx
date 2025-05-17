import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./../../assets/Images/Logo/rings.png";
import { userContext } from "../../context/userContext";
import { AuthContext } from "../../context/AuthContext";
import ProfilePopup from "./ProfilePopup";

function Navbar() {
  let { isLogin, setLogin } = useContext(userContext);
  const { userName } = useContext(AuthContext);
  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("userToken");
    setLogin(null);
    navigate("/login");
  }

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
    </div>
  );
}

export default Navbar;
