import React from "react";
import newest1 from "./../../assets/Images/Halls/Newest/Newest_1.jpg";
import newest2 from "./../../assets/Images/Halls/Newest/Newest_2.jpg";
import newest3 from "./../../assets/Images/Halls/Newest/Newest_3.jpg";
import newest4 from "./../../assets/Images/Halls/Newest/Newest_4.jpg";
import newest5 from "./../../assets/Images/Halls/Newest/Newest_5.jpg";
import newest6 from "./../../assets/Images/Halls/Newest/Newest_6.jpg";
import { Link } from "react-router-dom";

function Newest() {
  return (
    <>
      <section id="Newest">
        <div className="Newset">
          <div className="container-fluid">
            <div className="Title mt-5 mb-3">
              <h2>
                Newest <i className="fa-solid fa-arrow-right"></i>
              </h2>
            </div>
            <div className="row">
              <div className="col-md-2">
                <div>
                  <Link>
                    <img
                      loading="lazy"
                      src={newest1}
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
                      src={newest2}
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
                      src={newest3}
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
                      src={newest4}
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
                      src={newest5}
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
                      src={newest6}
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

export default Newest;
