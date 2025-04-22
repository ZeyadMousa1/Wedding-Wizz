import React from "react";
import Logo from "./../../assets/Images/Logo/rings.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer bg-black pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <span>Address:</span>
                  <p>Delta Higher Institute</p>
                  <span>Opening hours:</span>
                  <p>Sun-Thu: 10 am - 10 pm</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="middle_foot">
                  <a href="#" className="text-decoration-none">
                    <img
                      src={Logo}
                      alt=""
                      width="35"
                      height="35"
                      className="me-2"
                    />
                    Wedding Wizz
                  </a>
                  <p className="last-par my-4">
                    Sed lectus ultricies id id massa tellus. Gravida ullamcorper
                    lectus vitae tristique cursus tempor rutrum. Aenean posuere
                    urna
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="end-foot">
                  <span>Phone:</span>
                  <p>(+20)1234567891</p>
                  <span>Email:</span>
                  <p>WeddingWizz@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 my-2">
                <div className="d-flex justify-content-center text-light">
                  <a href="#">
                    <i className="facebook fa-brands fa-facebook mx-2"></i>
                  </a>
                  <a href="#">
                    <i className="instagram fa-brands fa-instagram mx-2"></i>
                  </a>
                  <a href="#">
                    <i className="x-twitter fa-brands fa-x-twitter mx-2"></i>
                  </a>
                  <a href="#">
                    <i className="youtube fa-brands fa-youtube mx-2"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-12 d-flex justify-content-center mt-5">
                <p>
                  © Copyright Wedding Wizz 2024. Design by Wedding Wizz Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
