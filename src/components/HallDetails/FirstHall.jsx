import React, { useState } from "react";
import hall1 from "./../../assets/Images/Halls/All Halls/All_Halls_1.jpg";
import * as Yup from "yup";

function HallDetails() {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    comments: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-4 bg-light mt-5 p-0">
            <div>
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
            <h2>Andrews Hall</h2>
            <img src={hall1} width={700} height={700} className="py-5" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              optio earum officia maxime, quisquam dolores illo deserunt ab
              atque soluta? Quasi in incidunt ea dolorem distinctio, eligendi
              sint modi inventore.
            </p>
            <div className="row">
              <div className="rate my-5 text-warning col-6">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
              <div className="rate my-5 col-6">
                <p>capacity: 500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HallDetails;
