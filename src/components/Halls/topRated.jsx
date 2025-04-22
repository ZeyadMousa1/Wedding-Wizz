import React from "react";
import topRated1 from "./../../assets/Images/Halls/Top Rated/Top_Rated_1.jpg";
import topRated2 from "./../../assets/Images/Halls/Top Rated/Top_Rated_2.jpg";
import topRated3 from "./../../assets/Images/Halls/Top Rated/Top_Rated_3.jpg";
import topRated4 from "./../../assets/Images/Halls/Top Rated/Top_Rated_4.jpg";
import topRated5 from "./../../assets/Images/Halls/Top Rated/Top_Rated_5.jpg";
import topRated6 from "./../../assets/Images/Halls/Top Rated/Top_Rated_6.jpg";
import { Link } from "react-router-dom";

function TopRated() {
  return (
    <>
      <section id="Top_rated">
        <div className="Top_rated">
          <div className="container-fluid">
            <div className="Title mt-5 mb-3">
              <h2>
                Top Rated <i className="fa-solid fa-arrow-right"></i>
              </h2>
            </div>
            <div className="row link">
              <div className="col-md-2">
                <div>
                  <Link>
                    <img
                      loading="lazy"
                      src={topRated1}
                      alt=""
                      width="100%"
                      height="325"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <Link>
                    <img
                      loading="lazy"
                      src={topRated2}
                      alt=""
                      width="100%"
                      height="325"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <Link>
                    <img
                      loading="lazy"
                      src={topRated3}
                      alt=""
                      width="100%"
                      height="325"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <Link>
                    <img
                      loading="lazy"
                      src={topRated4}
                      alt=""
                      width="100%"
                      height="325"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <Link>
                    <img
                      loading="lazy"
                      src={topRated5}
                      alt=""
                      width="100%"
                      height="325"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-2">
                <div>
                  <Link>
                    <img
                      loading="lazy"
                      src={topRated6}
                      alt=""
                      width="100%"
                      height="325"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopRated;
