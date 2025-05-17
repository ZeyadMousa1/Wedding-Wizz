import React, { useEffect, useState } from "react";
import { halls } from "./../HallDetails/hallData";
import { Link } from "react-router-dom";
import "./Halls.css";
import Search from "./Search";

function AllTheHalls() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [showModalImage, setShowModalImage] = useState(false);
  const [filters, setFilters] = useState({
    city: "",
    price: "",
  });
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); //

  // New states
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    setVisibleCount(5);
  }, [filters.city, filters.price, searchName, sortBy, sortOrder]);

  // Filter halls by city, price, and name
  let filteredHalls = halls.filter((hall) => {
    if (filters.city && hall.location !== filters.city) return false;

    if (filters.price) {
      const priceStr = filters.price.trim();
      const hallPrice = hall.price;

      if (priceStr.startsWith("Less Than")) {
        const max = parseInt(priceStr.replace(/\D/g, ""), 10);
        if (hallPrice > max) return false;
      } else if (priceStr.startsWith("More Than")) {
        const min = parseInt(priceStr.replace(/\D/g, ""), 10);
        if (hallPrice <= min) return false;
      } else {
        const max = parseInt(priceStr.replace(/\D/g, ""), 10);
        if (hallPrice > max) return false;
      }
    }

    // New: filter by name (case-insensitive)
    if (
      searchName &&
      !hall.name.toLowerCase().includes(searchName.toLowerCase().trim())
    )
      return false;

    return true;
  });

  // Sort halls based on sortBy
  if (sortBy) {
    filteredHalls = [...filteredHalls].sort((a, b) => {
      let comparison = 0;
      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === "rate") {
        comparison = a.rate - b.rate;
      } else if (sortBy === "price") {
        comparison = a.price - b.price;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });
  }

  // ... rest of your existing code remains unchanged

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
    setVisibleCount(filteredHalls.length);
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

  const handleClearFilters = () => {
    setFilters({ city: "", price: "" });
    setSearchName("");
    setSortBy("");
    setSortOrder("asc");
  };

  return (
    <>
      <section id="All_the_halls">
        <div className="All_the_halls">
          <div className="container-fluid">
            <Search
              selectedCity={filters.city}
              selectedPrice={filters.price}
              onCityChange={(city) => setFilters((prev) => ({ ...prev, city }))}
              onPriceChange={(price) =>
                setFilters((prev) => ({ ...prev, price }))
              }
              searchName={searchName}
              onSearchNameChange={setSearchName}
              sortBy={sortBy}
              onSortChange={setSortBy}
              sortOrder={sortOrder}
              onSortOrderChange={setSortOrder}
              onClearFilters={handleClearFilters}
            />
            <div className="Title mt-5 mb-3">
              <h2>All The Halls</h2>
            </div>
            {filteredHalls.slice(0, visibleCount).map((item, index) => (
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
                              <p>Price : {item.price} EGP</p>
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
            {visibleCount < filteredHalls.length && (
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
