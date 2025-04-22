import React from "react";
import allHalls1 from "./../../assets/Images/Halls/All Halls/All_Halls_1.jpg";
import allHalls2 from "./../../assets/Images/Halls/All Halls/All_Halls_2.jpg";
import allHalls3 from "./../../assets/Images/Halls/All Halls/All_Halls_3.jpg";
import allHalls4 from "./../../assets/Images/Halls/All Halls/All_Halls_4.jpg";
import allHalls5 from "./../../assets/Images/Halls/All Halls/All_Halls_5.jpg";
import { Link } from "react-router-dom";

function AllTheHalls() {
  return (
    <>
      <section id="All_the_halls">
        <div className="All_the_halls">
          <div className="container-fluid">
            <div className="Title mt-5 mb-3">
              <h2>All The Halls</h2>
            </div>
            <Link to={"FirstHall"} className="text-decoration-none text-black">
              <div className="row scroll-container">
                <div className="col-md-12">
                  <div className="bg-light d-flex gap-5 scroll">
                    <img
                      loading="lazy"
                      src={allHalls1}
                      alt=""
                      width="25%"
                      height="300"
                    />
                    <div className="h-100">
                      <h3 className="my-2">Andrews Hall</h3>
                      <p className="my-5">
                        If you are looking for the best option to hold an
                        exceptionally special event with complete
                        professionalism, we invite you to the Concorde El Salam
                        Hotel in Cairo
                      </p>
                      <p className="my-5">
                        <i className="fa-solid fa-location-dot"></i> Cairo
                      </p>
                      <div className="rate my-5 text-warning">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"SecondHall"} className="text-decoration-none text-black">
              <div className="row my-3 scroll-container">
                <div className="col-md-12">
                  <div className="bg-light d-flex gap-5 scroll">
                    <img
                      loading="lazy"
                      src={allHalls2}
                      alt=""
                      width="25%"
                      height="300"
                    />
                    <div className="h-100 ps-3">
                      <h3 className="my-2">Concorde El Salam Hall</h3>
                      <p className="mt-5 flex-wrap">
                        If you're planning a wedding and looking for a suitable
                        venue,
                      </p>{" "}
                      <p>
                        Amarante Golf Plaza Hotel in Cairo is your best choice.
                        Located in Greater Cairo on the Ismailia Desert Road, it
                        offers stunning views of the sea, green hills
                      </p>
                      <p className="my-5">
                        <i className="fa-solid fa-location-dot"></i> Mansoura
                      </p>
                      <div className="rate my-5 text-warning">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"ThirdHall"} className="text-decoration-none text-black">
              <div className="row my-3 scroll-container">
                <div className="col-md-12">
                  <div className="bg-light d-flex gap-5 scroll">
                    <img
                      loading="lazy"
                      src={allHalls3}
                      alt=""
                      width="25%"
                      height="300"
                    />
                    <div className="h-100">
                      <h3 className="my-2">Amarante Hall</h3>
                      <p className="my-5">Descreption</p>
                      <p className="my-5">
                        <i className="fa-solid fa-location-dot"></i> Cairo
                      </p>
                      <div className="rate my-5 text-warning">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"FourthHall"} className="text-decoration-none text-black">
              <div className="row my-3 scroll-container">
                <div className="col-md-12">
                  <div className="bg-light d-flex gap-5 scroll">
                    <img
                      loading="lazy"
                      src={allHalls4}
                      alt=""
                      width="25%"
                      height="300"
                    />
                    <div className="h-100">
                      <h3 className="my-2">Royal Garden Hall</h3>
                      <p className="my-5">Descreption</p>
                      <p className="my-5">
                        <i className="fa-solid fa-location-dot"></i> Alexandria
                      </p>
                      <div className="rate my-5 text-warning">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"FifthHall"} className="text-decoration-none text-black">
              <div className="row my-3 scroll-container">
                <div className="col-md-12">
                  <div className="bg-light d-flex gap-5 scroll">
                    <img
                      loading="lazy"
                      src={allHalls5}
                      alt=""
                      width="25%"
                      height="300"
                    />
                    <div className="h-100">
                      <h3 className="my-2">Gardenia Hall</h3>
                      <p className="my-5">Descreption</p>
                      <p className="my-5">
                        <i className="fa-solid fa-location-dot"></i> Mansoura
                      </p>
                      <div className="rate my-5 text-warning">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="d-flex justify-content-center my-5">
              <button className="btn">
                View all <i className="fa-solid fa-circle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllTheHalls;
