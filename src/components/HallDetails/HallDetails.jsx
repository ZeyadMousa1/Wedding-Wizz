import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NewestSlider from "../HallsSlider/NewestSlider";
import HallsSlider from "../HallsSlider/HallsSlider";
import Footer from "../Footer/Footer";
import { halls } from "./hallData";
import "./HallDetails.css";
import emailjs from "@emailjs/browser";

function HallDetails() {
  const { hallId } = useParams();
  const hall = halls.find((h) => h.link === hallId);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hallId]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    comments: "",
  });

  if (!hall) return <div>Hall not found</div>;

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) =>
    /^\+?\d{8,15}$/.test(phone.replace(/\s/g, ""));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    // Client-side validation
    if (!formData.name.trim()) {
      setErrorMsg("Name is required.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!validatePhone(formData.phone)) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }
    if (!formData.date) {
      setErrorMsg("Please select a date.");
      return;
    }

    setLoading(true);

    const SERVICE_ID = "service_x42ftzc";
    const TEMPLATE_ID = "template_7yevx7o";
    const PUBLIC_KEY = "nwuGHTeo27AT49tkA";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY).then(
      (result) => {
        setSuccessMsg("Booking sent! We will contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          comments: "",
        });
        setLoading(false);
        console.log(formData);
      },
      (error) => {
        setErrorMsg("Failed to send booking. Please try again.");
        setLoading(false);
      }
    );
  };

  const renderStars = (rate = 0, max = 5) => {
    const stars = [];
    for (let i = 1; i <= max; i++) {
      if (i <= Math.floor(rate)) {
        stars.push(<i key={i} className="fa-solid fa-star"></i>);
      } else if (i - rate <= 0.5) {
        stars.push(<i key={i} className="fa-solid fa-star-half-stroke"></i>);
      } else {
        stars.push(<i key={i} className="fa-regular fa-star"></i>);
      }
    }
    return stars;
  };

  const images = Object.keys(hall)
    .filter((key) => key.startsWith("image"))
    .map((key) => hall[key]);

  return (
    <div className="hall-details">
      <div className="container">
        <div className="row d-flex justify-content-between my-5">
          <div className="col-md-4 mt-5 p-0">
            <Link className="btn btn-primary mb-4" to={"../halls"}>
              <i className="fa-solid fa-arrow-left"></i> Back
            </Link>
            <div className="bg-light">
              <div>
                <h3 className="bg-secondary text-light text-center">
                  Make a reservation
                </h3>
              </div>
              <div className="form">
                <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                  <div className="my-5 px-5">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="floatingInput"
                        onChange={handleChange}
                        value={formData.name}
                        placeholder="name"
                        required
                        aria-label="Name"
                      />
                      <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating my-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="floatingEmail"
                        placeholder="email"
                        required
                        aria-label="Email"
                      />
                      <label htmlFor="floatingEmail">Email</label>
                    </div>
                    <div className="form-floating my-3">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="floatingNumber"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="phone"
                        required
                        aria-label="Phone"
                      />
                      <label htmlFor="floatingNumber">Phone</label>
                    </div>
                    <div className="form-floating my-3">
                      <input
                        type="date"
                        className="form-control"
                        id="floatingSubject"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        placeholder="Date"
                        required
                        aria-label="Date"
                      />
                      <label htmlFor="floatingSubject">Date</label>
                    </div>
                    <div className="form-floating my-3">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        id="floatingTextarea2"
                        style={{ height: "100px" }}
                        aria-label="Comments"
                      ></textarea>
                      <label htmlFor="floatingTextarea2">Comments</label>
                    </div>
                    {errorMsg && (
                      <div className="alert alert-danger py-2">{errorMsg}</div>
                    )}
                    {successMsg && (
                      <div className="alert alert-success py-2">
                        {successMsg}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg my-5 w-100"
                      disabled={loading}
                    >
                      {loading ? (
                        <span>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Sending...
                        </span>
                      ) : (
                        "Book Now"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-6 text-center">
            <div className="header mb-4">
              <h1 className="display-5 fw-bold">{hall.name}</h1>
              <div className="d-flex gap-3 align-items-center ms-4">
                <span className="badge bg-primary fs-6">
                  {hall.CLASSIFICATION}
                </span>
                <div className="rating">
                  {renderStars(hall.rate)} ({hall.rate.toFixed(1)})
                </div>
              </div>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide my-5">
              <div className="carousel-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : undefined}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={image}
                      width={700}
                      height={700}
                      alt={hall.name}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            {/* Key Details */}
            <div className="col-lg-12">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  {/* Price Highlight */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-primary mb-0">
                      {hall.price.toLocaleString()} EGP
                    </h3>
                    <span className="badge bg-success fs-6">
                      Capacity: {hall.capacity.toLocaleString()}
                    </span>
                  </div>

                  {/* Key Features Grid */}
                  <div className="row g-3 mb-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center gap-2">
                        <i className="fas fa-map-marker-alt text-muted"></i>
                        <div>
                          <small className="text-muted">Location</small>
                          <div className="fw-medium">{hall.location}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center gap-2">
                        <i className="fas fa-users text-muted"></i>
                        <div>
                          <small className="text-muted">Classification</small>
                          <div className="fw-medium">{hall.CLASSIFICATION}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <h5 className="mb-3">About This Venue</h5>
                    <p className="text-muted line-clamp-3">
                      {hall.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HallsSlider />
      <NewestSlider />
      <Footer />
    </div>
  );
}

export default HallDetails;
