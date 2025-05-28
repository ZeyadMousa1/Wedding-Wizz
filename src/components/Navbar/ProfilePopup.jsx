import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import userProfile from "../../assets/Images/user-profile-icon.jpg";

function ProfilePopup({ userName, logOut }) {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

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
          <>
            <p className="mb-2">
              Hello, <strong>{userName}</strong>
            </p>
            <div className="my-3">
              <Link to={"UserProfile"} className="text-decoration-none">
                <span className="fs-5">
                  <i className="fa-solid fa-user text-dark mx-3"></i>
                  <span className="fs-5 text-decoration-none">
                    View Profile
                  </span>
                </span>
              </Link>
            </div>
            <div className="my-3">
              <Link className="text-decoration-none">
                <span className="fs-5">
                  <i className="fa-solid fa-bell text-dark mx-3"></i>
                  <span className="fs-5 text-decoration-none">
                    Notifications
                  </span>
                </span>
              </Link>
            </div>
            <div className="my-3">
              <Link to={"FAQ"} className="text-decoration-none">
                <span className="fs-5">
                  <i className="fa-solid fa-circle-info text-dark mx-3"></i>
                  <span className="fs-5 text-decoration-none">Help Center</span>
                </span>
              </Link>
            </div>
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
        </div>
      )}
    </div>
  );
}

export default ProfilePopup;
