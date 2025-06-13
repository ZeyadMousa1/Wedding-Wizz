import React from "react";
import "./Home.css";
import WeddingHalls from "./../../assets/Images/Halls/Wedding halls.jpg";
import Photography from "./../../assets/Images/Photography and video.jpg";
import invitaion from "./../../assets/Images/marriage invitaion.jpg";
import car from "./../../assets/Images/Wedding car.jpg";
import dress from "./../../assets/Images/Wedding dress.jpg";
import logo1 from "./../../assets/Images/Logos/logo_1.png";
import logo2 from "./../../assets/Images/Logos/logo_2.png";
import logo3 from "./../../assets/Images/Logos/logo_3.png";
import logo4 from "./../../assets/Images/Logos/logo_4.png";
import event1 from "./../../assets/Images/Halls/events/event_1.jpg";
import event2 from "./../../assets/Images/Halls/events/event_2.jpg";
import event3 from "./../../assets/Images/Halls/events/event_3.jpg";
import event4 from "./../../assets/Images/Halls/events/event_4.jpg";
import event5 from "./../../assets/Images/Halls/events/event_5.jpg";
import event6 from "./../../assets/Images/Halls/events/event_6.jpg";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

function Home() {
  return (
    <>
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h3 className="fs-6 text-secondary mb-2 text-uppercase text-center">
                Our Success
              </h3>
              <h2 className="mb-4 display-5 text-center">
                We have a proven track record of success.
              </h2>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gy-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src={WeddingHalls}
                alt="Our Success"
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-end">
                <div className="col-12 col-xl-11">
                  <div className="row gy-4 gy-sm-0 overflow-hidden">
                    <div className="col-12 col-sm-6">
                      <div className="card border-0 border-bottom border-primary shadow-sm mb-4">
                        <div className="card-body text-center p-4 p-xxl-5">
                          <h3 className="display-2 fw-bold mb-2">850</h3>
                          <p className="fs-5 mb-0 text-secondary">Weddings</p>
                        </div>
                      </div>
                      <div className="card border-0 border-bottom border-primary shadow-sm">
                        <div className="card-body text-center p-4 p-xxl-5">
                          <h3 className="display-2 fw-bold mb-2">10k+</h3>
                          <p className="fs-5 mb-0 text-secondary">Ratings</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="card border-0 border-bottom border-primary shadow-sm mt-lg-6 mt-xxl-8 mb-4">
                        <div className="card-body text-center p-4 p-xxl-5">
                          <h3 className="display-2 fw-bold mb-2">32</h3>
                          <p className="fs-5 mb-0 text-secondary">Halls</p>
                        </div>
                      </div>
                      <div className="card border-0 border-bottom border-primary shadow-sm">
                        <div className="card-body text-center p-4 p-xxl-5">
                          <h3 className="display-2 fw-bold mb-2">18K+</h3>
                          <p className="fs-5 mb-0 text-secondary">Users</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service">
        <div className="service my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="my-3">We keep in mind the quality of service</h2>
                <div>
                  <p>
                    Sed lectus ultricies id id massa tellus. Gravida ullamcorper
                    lectus vitae tristique cursus tempor rutrum. Aenean posuere
                    urna feugiat nunc in nulla. Non ac iaculis lobortis amet
                    lectus ac donec
                  </p>
                </div>
                <div>
                  <p>
                    Aenean posuere urna feugiat nunc in nulla. Non ac iaculis
                    lobortis amet lectus ac donec
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 my-3">
                    <div className="my-3">
                      <i className="fa-solid fa-circle-check"></i>
                      <span className="px-3">Good hospitality</span>
                    </div>
                    <div>
                      <i className="fa-solid fa-circle-check"></i>
                      <span className="px-3">A day you will never forget</span>
                    </div>
                  </div>
                  <div className="col-md-6 my-3">
                    <div className="my-3">
                      <i className="fa-solid fa-circle-check"></i>
                      <span className="px-3">Luxury Weddings</span>
                    </div>
                    <div className="my-3">
                      <i className="fa-solid fa-circle-check"></i>
                      <span className="px-3">Aenean posuere urna</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service_img">
                  <img
                    loading="lazy"
                    src={Photography}
                    alt="Wedding photography and video services"
                    style={{ width: "100%", height: 570 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="bg-light">
        <div className="categories">
          <div className="container">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center align-items-center my-5">
                <div>
                  <div>
                    <h2>Quality services are key to our success</h2>
                  </div>
                  <div className="d-flex justify-content-center my-5">
                    <button className="btn">
                      <Link to={"Halls"} className="text-decoration-none text">
                        View all <i className="fa-solid fa-circle-right"></i>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 categories-image">
                <div>
                  <img
                    loading="lazy"
                    src={invitaion}
                    alt="Wedding invitation design samples"
                    style={{ width: 420, height: 500 }}
                  />
                </div>
              </div>
              <div className="col-md-4 py-3 categories-image">
                <div>
                  <img
                    loading="lazy"
                    src={car}
                    alt="Luxury wedding car service"
                    style={{ width: 420, height: 500 }}
                  />
                </div>
              </div>
              <div className="col-md-4 py-3 categories-image">
                <div>
                  <img
                    loading="lazy"
                    src={dress}
                    alt="Bridal dress collection"
                    style={{ width: 420, height: 500 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-3 py-5">
                <div>
                  <img
                    loading="lazy"
                    src={logo1}
                    alt="Partner logo 1"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="col-md-3 py-5">
                <div>
                  <img
                    loading="lazy"
                    src={logo2}
                    alt="Partner logo 2"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="col-md-3 py-5">
                <div>
                  <img
                    loading="lazy"
                    src={logo3}
                    alt="Partner logo 3"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="col-md-3 py-5">
                <div>
                  <img
                    loading="lazy"
                    src={logo4}
                    alt="Partner logo 4"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="bg-light py-5">
        <div className="events">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-center">
                  <h2>Our passion is your perfect event</h2>
                </div>

                <div className="row">
                  {/* Event Column 1 */}
                  <div className="col-md-4 py-2">
                    <div className="pb-3">
                      <img
                        loading="lazy"
                        src={event1}
                        alt="Wedding event setup"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div>
                      <img
                        loading="lazy"
                        src={event2}
                        alt="Bridal party celebration"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  {/* Event Column 2 */}
                  <div className="col-md-4 py-2">
                    <div className="pb-3">
                      <img
                        loading="lazy"
                        src={event3}
                        alt="Elegant venue decoration"
                        style={{ width: "100%", height: 540 }}
                      />
                    </div>
                    <div>
                      <img
                        loading="lazy"
                        src={event4}
                        alt="Reception area design"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  {/* Event Column 3 */}
                  <div className="col-md-4 py-2">
                    <div className="pb-3">
                      <img
                        loading="lazy"
                        src={event5}
                        alt="Outdoor ceremony setup"
                        style={{ width: "100%", height: 407 }}
                      />
                    </div>
                    <div>
                      <img
                        loading="lazy"
                        src={event6}
                        alt="Guest seating arrangement"
                        style={{ width: "100%", height: 410 }}
                      />
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

export default Home;
