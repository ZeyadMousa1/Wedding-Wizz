import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserProfile() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "Email",
    address: "Delta",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("Email");

    const [firstName, ...lastNameParts] = storedName.trim().split(" ");
    const lastName = lastNameParts.join(" ");

    setUserData((prev) => ({
      ...prev,
      firstName,
      lastName,
      Email: storedEmail,
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <div className="container-fluid bg-white min-vh-100">
      <div className="row py-4 px-2">
        <div className="col-md-3 mb-4">
          <nav className="mb-4">
            <ol className="breadcrumb bg-white px-0">
              <li className="breadcrumb-item text-muted">Home</li>
              <li className="breadcrumb-item active" aria-current="page">
                My Account
              </li>
            </ol>
          </nav>
          <div className="mb-4">
            <div className="fw-bold mb-2">Manage My Account</div>
            <ul className="list-unstyled ms-2">
              <li className="mb-1 fw-semibold">
                <Link className="text-decoration-none text-black">
                  My Profile
                </Link>
              </li>
              <li className="mb-1 text-muted">
                <Link className="text-decoration-none text-black">
                  Address Book
                </Link>
              </li>
              <li className="mb-1 text-muted">
                <Link className="text-decoration-none text-black">
                  My Payment Options
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="fw-bold mb-2">My Orders</div>
            <ul className="list-unstyled ms-2">
              <li className="mb-1 text-muted">
                <Link className="text-decoration-none text-black">
                  My Returns
                </Link>
              </li>
              <li className="mb-1 text-muted">
                <Link className="text-decoration-none text-black">
                  My Cancellations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="fw-bold mb-2">My WishList</div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="d-flex justify-content-end mb-2">
            <span>
              Welcome!{" "}
              <span className="text-danger fw-semibold">
                {userData.firstName} {userData.lastName}
              </span>
            </span>
          </div>
          <div className="bg-white p-4 rounded shadow-sm border">
            <h5 className="mb-4 text-danger fw-semibold">Edit Your Profile</h5>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={userData.firstName}
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={userData.lastName}
                    disabled
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={userData.email}
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={userData.address}
                    disabled
                  />
                </div>
              </div>
              <div className="mb-2 fw-semibold">Password Changes</div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Current Password"
                  name="currentPassword"
                  value={userData.currentPassword}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="New Password"
                  name="newPassword"
                  value={userData.newPassword}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Confirm New Password"
                  name="confirmNewPassword"
                  value={userData.confirmNewPassword}
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
