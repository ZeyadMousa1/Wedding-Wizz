import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userProfile from "../../assets/Images/user-profile-icon.jpg";

function ProfilePopup({ userName, isLogin, logOut }) {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  // Close popup if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="position-relative" ref={popupRef}>
      {/* Profile Picture Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="btn p-0 border-0"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
        aria-label="User profile"
      >
        <img
          src={userProfile}
          alt="Profile"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </button>

      {/* Popup Window */}
      {isOpen && (
        <div
          className="position-absolute bg-white border rounded shadow p-3"
          style={{
            top: "50px",
            right: 0,
            width: "200px",
            zIndex: 1000,
          }}
        >
          {isLogin ? (
            <>
              <p className="mb-2">
                Hello, <strong>{userName}</strong>
              </p>
              <button
                className="btn w-100"
                onClick={() => {
                  logOut();
                  setIsOpen(false);
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <p className="mb-2">You are not logged in.</p>
              <button
                className="btn btn-primary w-100"
                onClick={() => {
                  navigate("/Login");
                  setIsOpen(false);
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ProfilePopup;
