import React, { useState } from "react";
import hall1 from "./../../assets/Images/Halls/All Halls/Grand-Nile-Tower-1.jpg";
import hall2 from "./../../assets/Images/Halls/All Halls/Grand-Nile-Tower-2.jpg";
import hall3 from "./../../assets/Images/Halls/All Halls/Grand-Nile-Tower-3.jpg";
import hall4 from "./../../assets/Images/Halls/All Halls/Grand-Nile-Tower-4.jpg";
import hall5 from "./../../assets/Images/Halls/All Halls/Grand-Nile-Tower-5.jpg";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import NewestSlider from "../HallsSlider/NewestSlider";
import HallsSlider from "../HallsSlider/HallsSlider";

function GrandNileTower() {
  const hall = {
    name: "Grand Nile Tower",
    CLASSIFICATION: "Hotel",
    description:
      "This wedding hall features floor-to-ceiling windows that flood the space with natural light, offering stunning views and a warm, inviting ambiance. The open layout allows for versatile seating and decor arrangements, while greenery and light-colored walls enhance the fresh, contemporary feel-perfect for couples seeking a bright and airy celebration",
    location: "Cairo",
    link: "GrandNileTower",
    capacity: 500,
    rate: 3.5,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
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

  return (
    <>
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
                <form action="" onSubmit={handleSubmit}>
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
                        autoComplete="off"
                        required
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
                      />
                      <label htmlFor="floatingEmail">Email</label>
                    </div>
                    <div className="form-floating my-3">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="floatingNumber"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="phone"
                        required
                      />
                      <label htmlFor="floatingNumber">phone</label>
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
                      ></textarea>
                      <label htmlFor="floatingTextarea2">Comments</label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg mt-5 w-100"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-6 text-center">
            <h2>{hall.name}</h2>
            <div id="carouselExampleIndicators" className="carousel slide my-5">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  ariaCurrent="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={hall1} width={700} height={700} alt={hall.name} />
                </div>
                <div className="carousel-item">
                  <img src={hall2} width={700} height={700} alt={hall.name} />
                </div>
                <div className="carousel-item">
                  <img src={hall3} width={700} height={700} alt={hall.name} />
                </div>
                <div className="carousel-item">
                  <img src={hall4} width={700} height={700} alt={hall.name} />
                </div>
                <div className="carousel-item">
                  <img src={hall5} width={700} height={700} alt={hall.name} />
                </div>
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
            <p>{hall.description}</p>
            <div className="row">
              <div className="rate my-5 col-6">
                <span className="fw-bold">location :</span> {hall.location}
              </div>
              <div className="rate my-5 col-6">
                <p>
                  <span className="fw-bold">Classification :</span>{" "}
                  {hall.CLASSIFICATION}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="rate my-5 text-warning col-6">
                <span className="fw-bold text-black">Rate : </span>
                {renderStars(hall.rate)}
              </div>
              <div className="rate my-5 col-6">
                <p>
                  <span className="fw-bold">capacity :</span> {hall.capacity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HallsSlider />
      <NewestSlider />
      <Footer />
    </>
  );
}

export default GrandNileTower;
