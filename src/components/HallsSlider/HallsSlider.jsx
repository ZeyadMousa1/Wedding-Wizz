import Slider from "react-slick";
import topRated1 from "./../../assets/Images/Halls/Top Rated/Tut-ankh-amun-Hall.jpg";
import topRated2 from "./../../assets/Images/Halls/Top Rated/Crystal-Lotus-Hall.jpg";
import topRated3 from "./../../assets/Images/Halls/Top Rated/Diamond-View-Ballroom.jpg";
import topRated4 from "./../../assets/Images/Halls/Top Rated/Harmony Event Hall.jpg";
import topRated5 from "./../../assets/Images/Halls/Top Rated/Meridien-Heliopolis-Hotel-1.jpg";
import "./HallsSlider.css";
import { useState } from "react";

const Halls = [
  {
    image: topRated1,
    name: "Tut ankh amun Hall",
  },
  {
    image: topRated2,
    name: "Crystal Lotus Hall",
  },
  {
    image: topRated3,
    name: "Diamond View Ballroom",
  },
  {
    image: topRated4,
    name: "Harmony Event Hall",
  },
  {
    image: topRated5,
    name: "Meridien Heliopolis Hotel",
  },
];

function HallsSlider() {
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <div className="container-fluid my-5">
        <h2>
          Top Rated <i className="fa-solid fa-arrow-right"></i>
        </h2>
        <Slider {...settings}>
          {Halls.map((hall, idx) => (
            <div className="slider-image-wrapper" key={idx}>
              <div className="slider-image-container">
                <img
                  src={hall.image}
                  alt={`Top Rated Hall ${idx + 1}`}
                  className="slider-image"
                  onClick={(e) => {
                    e.preventDefault();
                    handleImageClick(hall.image);
                  }}
                />
                <p className="slider-overlay">
                  {hall.name || "More details..."}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

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

export default HallsSlider;
