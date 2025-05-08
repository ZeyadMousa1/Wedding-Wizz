import React, { useState } from "react";
import newest1 from "./../../assets/Images/Halls/Newest/Newest_1.jpg";
import newest2 from "./../../assets/Images/Halls/Newest/Newest_2.jpg";
import newest3 from "./../../assets/Images/Halls/Newest/Newest_3.jpg";
import newest4 from "./../../assets/Images/Halls/Newest/Newest_4.jpg";
import newest5 from "./../../assets/Images/Halls/Newest/Newest_5.jpg";
import { Link } from "react-router-dom";

function Newest() {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  // Images array for easy mapping
  const images = [newest1, newest2, newest3, newest4, newest5];

  // Open modal with selected image
  const handleImageClick = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

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
              {images.map((img, idx) => (
                <div className="col-md-2" key={idx}>
                  <div>
                    {/* Remove Link if not needed, or add to={} */}
                    <Link to="#">
                      <img
                        loading="lazy"
                        src={img}
                        alt={`Newest ${idx + 1}`}
                        width="100%"
                        height="325"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleImageClick(img);
                        }}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                  src={modalImage}
                  alt="Popup"
                  style={{
                    maxWidth: "50vw",
                    maxHeight: "50vh",
                    borderRadius: "8px",
                    boxShadow: "0 2px 16px #000",
                  }}
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                />
              </div>
              <div className="col-12 text-center mt-5">
                <Link className="btn text-light bg-primary fs-5" to={""}>
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

export default Newest;
