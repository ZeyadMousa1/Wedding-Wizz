import React, { useState } from "react";
import { halls } from "./../HallDetails/hallData";
import { Link } from "react-router-dom";
import "./Halls.css";

function AllTheHalls() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [showModalImage, setShowModalImage] = useState(false);

  const handleImageClick = (img) => {
    setModalImage(img);
    setModalOpen(true);
    setTimeout(() => setShowModalImage(true), 10);
  };

  const handleCloseModal = () => {
    setShowModalImage(false);
    setTimeout(() => {
      setModalOpen(false);
      setModalImage(null);
    }, 300);
  };

  const handleViewAllClick = () => {
    setVisibleCount(halls.length);
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
      <section id="All_the_halls">
        <div className="All_the_halls">
          <div className="container-fluid">
            <div className="Title mt-5 mb-3">
              <h2>All The Halls</h2>
            </div>
            {halls.slice(0, visibleCount).map((item, index) => (
              <Link
                to={`/Halls/${item.link}`}
                className="text-decoration-none text-black"
                key={index}
              >
                <div className="row scroll-container my-3">
                  <div className="col-md-12">
                    <div className="bg-light d-flex gap-5 scroll">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-3">
                            <div className="slider-image-wrapper" key={index}>
                              <div className="slider-image-container">
                                <img
                                  src={item.image}
                                  alt={`Top Rated Hall ${index + 1}`}
                                  className="slider-image"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setModalImage(item.image);
                                    setModalOpen(true);
                                    handleImageClick(item.image);
                                  }}
                                />
                                <p className="slider-overlay">
                                  {item.text || "More details..."}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="h-100">
                              <h3 className="my-2">{item.name}</h3>
                              <p className="my-5">{item.description}</p>
                              <p className="my-5">
                                <i className="fa-solid fa-location-dot"></i>{" "}
                                {item.location}
                              </p>
                              <div className="rate my-5 text-warning">
                                {renderStars(item.rate)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {visibleCount < halls.length && (
              <div className="d-flex justify-content-center my-5">
                <button className="btn" onClick={handleViewAllClick}>
                  View all <i className="fa-solid fa-circle-right"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {modalOpen && (
        <div
          className="modal-backdrop"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={handleCloseModal}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <img
                  src={modalImage}
                  alt="Popup"
                  style={{
                    maxWidth: "50vw",
                    maxHeight: "50vh",
                    borderRadius: "8px",
                    boxShadow: "0 2px 16px #000",
                    transition:
                      "transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s",
                    transform: showModalImage ? "scale(1)" : "scale(0.8)",
                    opacity: showModalImage ? 1 : 0,
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="col-12 text-center mt-5"></div>
            </div>
          </div>
          <button
            style={{
              position: "absolute",
              top: 30,
              right: 30,
              fontSize: 32,
              color: "#fff",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleCloseModal}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}

export default AllTheHalls;
