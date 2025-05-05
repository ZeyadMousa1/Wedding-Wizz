import Slider from "react-slick";
import newest1 from "./../../assets/Images/Halls/Newest/Newest_1.jpg";
import newest2 from "./../../assets/Images/Halls/Newest/Newest_2.jpg";
import newest3 from "./../../assets/Images/Halls/Newest/Newest_3.jpg";
import newest4 from "./../../assets/Images/Halls/Newest/Newest_4.jpg";
import newest5 from "./../../assets/Images/Halls/Newest/Newest_5.jpg";
import "./HallsSlider.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Halls = [
  {
    image: newest1,
    text: "",
  },
  {
    image: newest2,
  },
  {
    image: newest3,
  },
  {
    image: newest4,
  },
  {
    image: newest5,
  },
];

function NewestSlider() {
  // Modal state
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
          Newest <i className="fa-solid fa-arrow-right"></i>
        </h2>
        <Slider {...settings}>
          {Halls.map((img, idx) => (
            <div className="slider-image-wrapper" key={idx}>
              <div className="slider-image-container">
                <img
                  loading="lazy"
                  className="slider-image"
                  src={img.image}
                  alt={`Newest ${idx + 1}`}
                  width="100%"
                  height="350"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleImageClick(img);
                  }}
                />
                <p className="slider-overlay">
                  {img.text || "More details..."}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal Popup */}
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
                  src={modalImage.image}
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
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                />
              </div>
              <div className="col-12 text-center mt-5">
                <Link
                  className="btn text-light bg-primary fs-5"
                  to={modalImage ? `/hall/${modalImage.id || ""}` : "#"}
                >
                  Go to Hall Page{" "}
                  <i className="fa-solid fa-arrow-right fs-5"></i>
                </Link>
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

export default NewestSlider;
