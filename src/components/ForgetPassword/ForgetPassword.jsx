import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function ForgetPassword() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    // Basic email format validation (optional)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        { email }
      );
      console.log(response.data);
      localStorage.setItem("resetEmail", email);
      console.log("resetEmail :", email);

      // If request succeeds
      setMessage("Password reset email sent. Please check your inbox.");
      navigate("../verify-code");
    } catch (error) {
      // Handle error response from server
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-light py-3 py-md-5 ForgetPassword">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="text-center mb-3"></div>
                  <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                    Provide the email address associated with your account to
                    recover your password.
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-2 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            className="form-control"
                            name="email"
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                          />
                          <label htmlFor="email" classNameName="form-label">
                            Enter your email address:
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid my-3">
                          <button
                            className="btn bsb-btn-xl btn-primary"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? "Sending..." : "Submit"}
                          </button>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex gap-2 justify-content-between">
                          <Link
                            to={"../Login"}
                            className="link-primary text-decoration-none"
                          >
                            Log In
                          </Link>
                          <Link
                            to={"../Register"}
                            className="link-primary text-decoration-none"
                          >
                            Register
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                  {message && (
                    <p style={{ color: "green", marginTop: 16 }}>{message}</p>
                  )}
                  {error && (
                    <p style={{ color: "red", marginTop: 16 }}>{error}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgetPassword;
