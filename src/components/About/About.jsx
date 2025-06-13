import React from "react";
import { Link } from "react-router-dom";
import img1 from "./../../assets/Images/Wedding DJ.jpg";
import img2 from "./../../assets/Images/aboutUs/img2.jpg";
import img3 from "./../../assets/Images/aboutUs/img3.jpg";
import team1 from "./../../assets/Images/aboutUs/team-img-1.jpg";
import team2 from "./../../assets/Images/aboutUs/team-img-2.jpg";
import team3 from "./../../assets/Images/aboutUs/team-img-3.jpg";
import Footer from "../Footer/Footer";
import "./About.css";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

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
                          <span>Venue Decoration</span>
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
                          <span>Seating Arrangements</span>
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
                          <span>Catering Coordination</span>
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
                          <span>Entertainment Planning</span>
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
                          <span>Lighting & Ambience</span>
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
                          <span>Event Management</span>
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
                        fillRule="evenodd"
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
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">
                Our Team
              </h2>
              <p className="display-5 mb-4 mb-md-5 text-center">
                With Our Team, you can expect personalized attention and
                engaging designs.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container overflow-hidden">
          <div className="row gy-4 gy-lg-0">
            <div className="col-12 col-lg-4">
              <div className="card border-0">
                <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                  <img
                    className="img-fluid bsb-scale bsb-hover-scale-up"
                    loading="lazy"
                    src={team1}
                    alt="Flora Nyra"
                  />
                </figure>
                <div className="card-body border bg-white p-4">
                  <h2 className="card-title h4 fw-bold mb-3">Flora Nyra</h2>
                  <p className="card-text text-secondary">
                    Define the product vision and strategy and conduct user
                    research to understand the needs of the target market.
                  </p>
                </div>
                <div className="card-footer border border-top-0 bg-white p-4">
                  <ul className="nav mb-0 bsb-nav-sep">
                    <li className="nav-item text-secondary">
                      <a
                        className="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center"
                        href="#!"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-lightbulb text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                        </svg>
                        <span className="ms-2 fs-6">Product Manager</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card border-0">
                <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                  <img
                    className="img-fluid bsb-scale bsb-hover-scale-up"
                    loading="lazy"
                    src={team2}
                    alt="James Levi"
                  />
                </figure>
                <div className="card-body border bg-white p-4">
                  <h2 className="card-title h4 fw-bold mb-3">James Levi</h2>
                  <p className="card-text text-secondary">
                    Analyze financial statements to assess a company's financial
                    performance and develop financial models for future
                    performance.
                  </p>
                </div>
                <div className="card-footer border border-top-0 bg-white p-4">
                  <ul className="nav mb-0 bsb-nav-sep">
                    <li className="nav-item text-secondary">
                      <a
                        className="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center"
                        href="#!"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-layers text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                        </svg>
                        <span className="ms-2 fs-6">Financial Analyst</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card border-0">
                <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                  <img
                    className="img-fluid bsb-scale bsb-hover-scale-up"
                    loading="lazy"
                    src={team3}
                    alt="Taytum Elia"
                  />
                </figure>
                <div className="card-body border bg-white p-4">
                  <h2 className="card-title h4 fw-bold mb-3">Taytum Elia</h2>
                  <p className="card-text text-secondary">
                    Develop and oversee the visual concept for a product or
                    brand and direct and review the work of other creative
                    professionals.
                  </p>
                </div>
                <div className="card-footer border border-top-0 bg-white p-4">
                  <ul className="nav mb-0 bsb-nav-sep">
                    <li className="nav-item text-secondary">
                      <a
                        className="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center"
                        href="#!"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-brush text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
                        </svg>
                        <span className="ms-2 fs-6">Art Director</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bsb-service-7 py-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7">
              <h3 className="fs-5 mb-2 text-secondary text-center text-uppercase">
                Services
              </h3>
              <h2 className="display-5 mb-5 mb-xl-9 text-center">
                We offer premier services where excellence meets affordability.
              </h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="container-fluid bg-light border shadow">
                <div className="row">
                  <div className="col-12 col-md-4 p-0">
                    <div className="card border-0 bg-transparent">
                      <div className="card-body text-center p-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          fill="currentColor"
                          className="bi bi-basket2-fill text-primary mb-4"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
                        </svg>
                        <h4 className="fw-bold text-uppercase mb-4">
                          Strategy
                        </h4>
                        <p className="mb-4 text-secondary">
                          The first phase is to develop a strategy for the
                          product or service that the tech company is
                          developing. This involves understanding the market and
                          identifying the needs.
                        </p>
                        <a
                          href="#!"
                          className="fw-bold text-decoration-none link-primary"
                        >
                          Learn More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-right-short"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 p-0 border-top border-bottom border-start border-end">
                    <div className="card border-0 bg-transparent">
                      <div className="card-body text-center p-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          fill="currentColor"
                          className="bi bi-rocket text-primary mb-4"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8Z" />
                          <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.495 3.495 0 0 0-.463-.315A2.19 2.19 0 0 0 8.25.064.546.546 0 0 0 8 0a.549.549 0 0 0-.266.073 2.312 2.312 0 0 0-.142.08 3.67 3.67 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635.85 0 1.7-.207 2.4-.635.067.03.132.056.196.083.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562l-1.499-1.83ZM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935L12 10.445ZM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199ZM8.009 1.073c.063.04.14.094.226.163.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13c-.781 0-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32.09-.076.17-.135.236-.18Z" />
                          <path d="M9.479 14.361c-.48.093-.98.139-1.479.139-.5 0-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0l1.079-1.439Z" />
                        </svg>
                        <h4 className="fw-bold text-uppercase mb-4">Design</h4>
                        <p className="mb-4 text-secondary">
                          Once the strategy is in place, the next phase is to
                          design the product or service. This involves creating
                          wireframes, prototypes, and mockups to test the
                          design.
                        </p>
                        <a
                          href="#!"
                          className="fw-bold text-decoration-none link-primary"
                        >
                          Learn More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-right-short"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 p-0">
                    <div className="card border-0 bg-transparent">
                      <div className="card-body text-center p-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          fill="currentColor"
                          className="bi bi-incognito text-primary mb-4"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205a1.032 1.032 0 0 0-.014-.058l-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5c-.62 0-1.411-.136-2.025-.267-.541-.115-1.093.2-1.239.735Zm.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a29.58 29.58 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274ZM3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Zm-1.5.5c0-.175.03-.344.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085c.055.156.085.325.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0v-1Zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Z"
                          />
                        </svg>
                        <h4 className="fw-bold text-uppercase mb-4">
                          Development
                        </h4>
                        <p className="mb-4 text-secondary">
                          Once the design is finalized, the next phase is to
                          develop the product or service. This involves writing
                          code, building databases, and creating other assets.
                        </p>
                        <a
                          href="#!"
                          className="fw-bold text-decoration-none link-primary"
                        >
                          Learn More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-right-short"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                            />
                          </svg>
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

      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default About;
