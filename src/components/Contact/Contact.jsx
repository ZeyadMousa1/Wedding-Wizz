import React from "react";
import contactUs from "./../../assets/Images/contactus/_R5A5846.jpg";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <>
      <section id="Contact_us">
        <div class="contactus">
          <div class="container">
            <div class="row my-3">
              <div class="col-md-6">
                <div>
                  <h2 class="my-5">
                    Handling the stress so your event is a success{" "}
                  </h2>
                  <p>
                    Sed lectus ultricies id id massa tellus. Gravida ullamcorper
                    lectus vitae tristique cursus tempor rutrum
                  </p>
                  <div class="contact row m-3">
                    <div class="col-md-6 my-5">
                      <div class="d-flex align-items-center">
                        <i class="fa-solid fa-phone"></i>
                        <div class="mx-4">
                          <p>phone</p>
                          <p>(+20)1234567891</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 my-5">
                      <div class="d-flex align-items-center">
                        <i class="fa-regular fa-envelope"></i>
                        <div class="mx-4">
                          <p>Email</p>
                          <p>WeddingWizz@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src={contactUs}
                      alt="contactus"
                      width="80%"
                      height="415"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6 bg-light mt-5 p-5">
                <div>
                  <h3>Send Us a message</h3>
                  <p>
                    Sed lectus ultricies id id massa tellus. Gravida ullamcorper
                    lectus vitae tristique cursus tempor rutrum
                  </p>
                  <div class="form">
                    <form action="">
                      <div className="form-floating my-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Name"
                          required
                        />
                        <label htmlFor="floatingInput">Name</label>
                      </div>
                      <div className="form-floating my-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="floatingEmail"
                          placeholder="Email"
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
                          placeholder="Number"
                          required
                        />
                        <label htmlFor="floatingNumber">Number</label>
                      </div>
                      <div className="form-floating my-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingSubject"
                          placeholder="Subject"
                          required
                        />
                        <label htmlFor="floatingSubject">Subject</label>
                      </div>
                      <div className="form-floating my-3">
                        <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label htmlFor="floatingTextarea2">Comments</label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg mt-5"
                      >
                        <i className="fa-regular fa-envelope me-3"></i>Send
                        Message
                      </button>
                    </form>
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

export default Contact;
