import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyResetCode() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        { resetCode: code }
      );

      // Code is valid - navigate to password reset page
      navigate("/reset-password");
    } catch (error) {
      setError(
        error.response?.data?.message || "Invalid code. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Verify Reset Code</h2>
      <p>Check your email for the 6-digit reset code</p>

      <form onSubmit={handleSubmit} className="form-floating">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Enter 6-digit code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          // pattern="\d{6}"
          className="form-control my-3"
        />
        <label htmlFor="text" classNameName="form-label">
          Enter your verification code:
        </label>
        <button
          className="btn bsb-btn-xl btn-primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify Code"}
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: 16 }}>{error}</p>}
    </div>
  );
}

export default VerifyResetCode;
