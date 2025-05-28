import axios from "axios";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve email from localStorage (set during forgot password request)
    const storedEmail = localStorage.getItem("resetEmail");
    if (!storedEmail) navigate("/forgot-password");
    setEmail(storedEmail);
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      await axios.put(
        "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        {
          email,
          newPassword,
        }
      );

      setMessage("Password reset successfully! Redirecting to login...");
      localStorage.removeItem("resetEmail");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Password reset failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  let validationSchema = Yup.object({
    password: Yup.string()
      .required("password is required")
      .matches(
        /^[A-Z](?=.*[!@#$%])[a-z0-9!@#$%]{6,24}$/,
        "Password must start with an uppercase letter and contain 6-24 lowercase letters, digits, or special characters (!@#$%)"
      ),
    rePassword: Yup.string()
      .required("confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  let formik = useFormik({
    initialValues: {
      password: "",
      rePassword: "",
    },
    validationSchema: validationSchema,
  });

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            onBlur={formik.handleBlur}
            type="password"
            className={`form-control ${
              formik.touched.rePassword && formik.errors.rePassword
                ? "is-invalid"
                : ""
            }`}
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            name="Password"
            id="password"
            minLength="6"
          />
          <label htmlFor="Password" classNameName="form-label">
            Enter your New Password:
          </label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            name="rePassword"
            id="repassword"
            className={`form-control my-3 ${
              formik.touched.repassword && formik.errors.rePassword
                ? "is-invalid"
                : ""
            }`}
          />
          <label htmlFor="rePassword" classNameName="form-label">
            reEnter your New Password:
          </label>
        </div>

        <button
          className="btn bsb-btn-xl btn-primary"
          type="submit"
          style={{ padding: 10, width: "100%" }}
          disabled={loading}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
      {message && <p style={{ color: "green", marginTop: 16 }}>{message}</p>}
      {error && <p style={{ color: "red", marginTop: 16 }}>{error}</p>}
    </div>
  );
}

export default ResetPassword;
