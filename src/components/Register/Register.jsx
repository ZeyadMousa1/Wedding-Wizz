import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { userContext } from "../../context/userContext";

function Register() {
  let navigate = useNavigate();

  let { setLogin } = useContext(userContext);

  async function handleRegister(values) {
    console.log("Register", values);
    try {
      let response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      console.log("Full response", response);
      console.log("Certain Response", response.data);
      if (response.data.message === "success") {
        localStorage.setItem("userToken", response.data.token);
        setLogin(response.data.token);

        navigate("/Login");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  let validationSchema = Yup.object({
    name: Yup.string()
      .required("name is required")
      .min(5, "min length is 5")
      .max(24, "max length is 24"),
    email: Yup.string()
      .required("email is required")
      .email("enter valid email"),
    phone: Yup.string()
      .required("phone is required")
      .matches(/^01[1250][0-9]{8}$/, "phone is not valid"),
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
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleRegister,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  });

  return (
    <>
      <section className="bg-light p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
              <div className="card border border-light-subtle rounded-4">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h2 className="h4 text-center">Registration</h2>
                        <h3 className="fs-6 fw-normal text-secondary text-center m-0">
                          Enter your details to register
                        </h3>
                      </div>
                    </div>
                  </div>
                  <form action="#!" onSubmit={formik.handleSubmit}>
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            className={`form-control ${
                              formik.touched.name && formik.errors.name
                                ? "is-invalid"
                                : ""
                            }`}
                            name="name"
                            value={formik.values.name}
                            id="name"
                            placeholder="Last Name"
                            required
                          />
                          <label htmlFor="lastName" className="form-label">
                            Name
                          </label>
                          {formik.touched.name && formik.errors.name ? (
                            <div className="text-danger">
                              {formik.errors.name}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="email"
                            className={`form-control ${
                              formik.touched.email && formik.errors.email
                                ? "is-invalid"
                                : ""
                            }`}
                            name="email"
                            value={formik.values.email}
                            id="email"
                            placeholder="name@example.com"
                            required
                          />
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger">
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                            className={`form-control ${
                              formik.touched.password && formik.errors.password
                                ? "is-invalid"
                                : ""
                            }`}
                            name="password"
                            value={formik.values.password}
                            id="password"
                            placeholder="Password"
                            required
                          />
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">
                              {formik.errors.password}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                            className={`form-control ${
                              formik.touched.rePassword &&
                              formik.errors.rePassword
                                ? "is-invalid"
                                : ""
                            }`}
                            name="rePassword"
                            value={formik.values.rePassword}
                            id="rePassword"
                            placeholder="Re-enter Password"
                            required
                          />
                          <label htmlFor="rePassword" className="form-label">
                            Re-enter Password
                          </label>
                          {formik.touched.rePassword &&
                          formik.errors.rePassword ? (
                            <div className="text-danger">
                              {formik.errors.rePassword}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="tel"
                            className={`form-control ${
                              formik.touched.phone && formik.errors.phone
                                ? "is-invalid"
                                : ""
                            }`}
                            name="phone"
                            value={formik.values.phone}
                            id="Phone"
                            placeholder="Phone"
                            required
                          />
                          <label htmlFor="Phone" className="form-label">
                            Phone
                          </label>
                          {formik.touched.phone && formik.errors.phone ? (
                            <div className="text-danger">
                              {formik.errors.phone}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="iAgree"
                            id="iAgree"
                            required
                          />
                          <label
                            className="form-check-label text-secondary"
                            htmlFor="iAgree"
                          >
                            I agree to the{" "}
                            <a
                              href="#!"
                              className="link-primary text-decoration-none"
                            >
                              terms and conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className="btn bsb-btn-xl btn-primary"
                            type="submit"
                          >
                            Sign up
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <hr className="mt-5 mb-4 border-secondary-subtle" />
                      <p className="m-0 text-secondary text-center">
                        Already have an account?
                        <a
                          href="Login"
                          className="link-primary text-decoration-none"
                        >
                          log in
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="mt-5 mb-5">Or continue with</p>
                      <div className="d-flex gap-2 gap-sm-3 justify-content-center">
                        <a
                          href="https://www.google.com/"
                          className="btn btn-lg btn-outline-danger p-3 lh-1"
                          target="blank"
                        >
                          <i className="fa-brands fa-google"></i>
                        </a>
                        <a
                          href="https://www.facebook.com/"
                          className="btn btn-lg btn-outline-primary p-3 lh-1"
                          target="blank"
                        >
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a
                          href="https://www.twitter.com/"
                          className="btn btn-lg btn-outline-dark p-3 lh-1"
                          target="blank"
                        >
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
