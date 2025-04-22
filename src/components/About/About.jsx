import React from "react";
import { Link } from "react-router-dom";
import img1 from "./../../assets/Images/Wedding DJ.jpg";
import img2 from "./../../assets/Images/aboutUs/img2.jpg";
import img3 from "./../../assets/Images/aboutUs/img3.jpg";
import Footer from "../Footer/Footer";

function About() {
  return (
    <>
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Our Best Offers</h2>
              <p className="text-secondary mb-5 text-center lead fs-4">
                We pride ourselves on delivering top-notch repair and
                maintenance solutions to cyclists of all levels.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gy-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded border border-dark"
                loading="lazy"
                src={img1}
                alt="About Us"
              />
            </div>
            <div className="col-12 col-lg-6 col-xxl-6">
              <div className="row justify-content-lg-end justify-content-xxl-around">
                <div className="col-12 col-lg-11 col-xxl-10">
                  <div className="card border-0 mb-4">
                    <div className="card-body p-0">
                      <h4 className="card-title mb-3">Our Services</h4>
                      <ul className="list-unstyled m-0 p-0 d-sm-flex flex-sm-wrap">
                        <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span className="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                            </svg>
                          </span>
                          <span>Tune-Up Services</span>
                        </li>
                        <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span className="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                            </svg>
                          </span>
                          <span>Wheel Services</span>
                        </li>
                        <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span className="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                            </svg>
                          </span>
                          <span>Brake Services</span>
                        </li>
                        <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span className="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                            </svg>
                          </span>
                          <span>Drivetrain Services</span>
                        </li>
                        <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span className="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                            </svg>
                          </span>
                          <span>Suspension Services</span>
                        </li>
                        <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span className="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                            </svg>
                          </span>
                          <span>Frame Services</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="card border-0 mb-4 mb-xxl-5">
                    <div className="card-body p-0">
                      <h4 className="card-title mb-3">Accessory</h4>
                      <ul className="list-unstyled m-0 p-0 d-sm-flex flex-sm-wrap">
                        <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span className="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                            </svg>
                          </span>
                          <span>Handlebar Tape Installation</span>
                        </li>
                        <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span className="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                            </svg>
                          </span>
                          <span>Pedal Installation</span>
                        </li>
                        <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span className="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                            </svg>
                          </span>
                          <span>Fender Installation</span>
                        </li>
                        <li className="py-1 d-flex align-items-center gap-2 col-sm-6">
                          <span className="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-check-all"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                            </svg>
                          </span>
                          <span>Rack and Pannier Installation</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Link to={"../Halls"} className="btn btn-primary bsb-btn-2xl">
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8">
              <h3 className="fs-5 mb-2 text-secondary text-uppercase">About</h3>
              <h2 className="display-5 mb-4">
                At our core, we prioritize pushing boundaries, embracing the
                unknown, and fostering a culture of continuous learning.
              </h2>
              <Link to={"../Contact"}>
                <button
                  type="button"
                  className="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5"
                >
                  Connect Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0">
            <div className="col-12 col-lg-6">
              <div className="card bg-light p-3 m-0">
                <div className="row gy-3 gy-md-0 align-items-md-center">
                  <div className="col-md-5">
                    <img
                      src={img2}
                      className="img-fluid rounded-start"
                      alt="Why Choose Us?"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body p-0">
                      <h2 className="card-title h4 mb-3">Why Choose Us?</h2>
                      <p className="card-text lead">
                        With years of experience and deep industry knowledge, we
                        have a proven track record of success and are pushing
                        ourselves to stay ahead of the curve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card bg-light p-3 m-0">
                <div className="row gy-3 gy-md-0 align-items-md-center">
                  <div className="col-md-5">
                    <img
                      src={img3}
                      className="img-fluid rounded-start"
                      alt="Visionary Team"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body p-0">
                      <h2 className="card-title h4 mb-3">Visionary Team</h2>
                      <p className="card-text lead">
                        With a team of visionary engineers, developers, and
                        creative minds, we embark on a journey to transform
                        complex challenges into ingenious technological
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
