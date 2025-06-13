import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ProfileDropdown.css";

function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  let navigate = useNavigate();

  // ✅ Get the userName from localStorage
  const userName = localStorage.getItem("userName") || "Guest";

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function logOut() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    navigate("/login");
  }

  return (
    <div className="position-relative" ref={dropdownRef}>
      <span
        className="profile-avatar btn p-0 border-0 bg-transparent"
        style={{ cursor: "pointer", marginLeft: 20 }}
        onClick={() => setOpen((prev) => !prev)}
        tabIndex={0}
        onMouseEnter={(e) => e.currentTarget.classList.add("text-danger")}
        onMouseLeave={(e) => e.currentTarget.classList.remove("text-danger")}
      >
        <i className="fa-solid fa-user profile"></i>
      </span>

      {/* Dropdown */}
      {open && (
        <div
          className="profile-dropdown-menu shadow rounded-3 p-3"
          style={{
            minWidth: 230,
            position: "absolute",
            top: 48,
            right: 0,
            background: "rgba(0, 0, 0, 0.45)",
            zIndex: 100,
          }}
        >
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              👋 <span className="text-light fs-6"> Hello: </span>
              <strong className="text-danger">{userName}</strong>
            </li>
            <li>
              <NavLink
                to="/UserProfile"
                className="dropdown-item d-flex align-items-center gap-2 text-light"
              >
                <i className="fa-solid fa-user"></i>
                Manage My Account
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"FAQ"}
                className="dropdown-item d-flex align-items-center gap-2 text-light"
              >
                <i className="fa-solid fa-user"></i>
                Help Center
              </NavLink>
            </li>
            <li>
              <button
                className="dropdown-item d-flex align-items-center gap-2 text-light"
                onClick={() => {
                  logOut();
                }}
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
