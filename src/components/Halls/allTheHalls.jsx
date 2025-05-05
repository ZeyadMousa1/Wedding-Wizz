import React, { useState } from "react";
import MeridienHeliopolisHotel from "./../../assets/Images/Halls/All Halls/Meridien-Heliopolis-Hotel-1.jpg";
import GrandNileTower from "./../../assets/Images/Halls/All Halls/Grand-Nile-Tower-1.jpg";
import SkyExecutiveResort from "./../../assets/Images/Halls/All Halls/Sky-Executive-Resort-1.jpg";
import TriumphHotelElTagamoa from "./../../assets/Images/Halls/All Halls/Triumph-Hotel-El-Tagamoa-1.jpg";
import GardeniaHall from "./../../assets/Images/Halls/All Halls/Gardenia-Hall-1.jpg";
import RoyalGarden from "./../../assets/Images/Halls/All Halls/Royal_Garden_1.jpg";
import allHalls4 from "./../../assets/Images/Halls/All Halls/All_Halls_4.jpg";
import allHalls5 from "./../../assets/Images/Halls/All Halls/All_Halls_5.jpg";
import allHalls8 from "./../../assets/Images/Halls/All Halls/All_Halls_8.jpg";
import allHalls9 from "./../../assets/Images/Halls/All Halls/All_Halls_9.jpg";
import allHalls10 from "./../../assets/Images/Halls/All Halls/All_Halls_10.jpg";
import allHalls11 from "./../../assets/Images/Halls/All Halls/All_Halls_11.JPEG";
import allHalls12 from "./../../assets/Images/Halls/All Halls/All_Halls_12.JPG";
import allHalls13 from "./../../assets/Images/Halls/All Halls/All_Halls_13.JPG";
import allHalls14 from "./../../assets/Images/Halls/All Halls/All_Halls_14.JPG";
import allHalls15 from "./../../assets/Images/Halls/All Halls/All_Halls_15.JPG";
import event_1 from "./../../assets/Images/Halls/All Halls/event_1.JPG";
import event_3 from "./../../assets/Images/Halls/All Halls/event_3.jpg";
import event_4 from "./../../assets/Images/Halls/All Halls/event_4.jpg";
import Newest_1 from "./../../assets/Images/Halls/All Halls/Newest_1.JPG";
import Newest_2 from "./../../assets/Images/Halls/All Halls/Newest_2.JPG";
import Newest_3 from "./../../assets/Images/Halls/All Halls/Newest_3.JPG";
import Newest_4 from "./../../assets/Images/Halls/All Halls/Newest_4.JPG";
import Newest_5 from "./../../assets/Images/Halls/All Halls/Newest_5.JPG";
import Newest_6 from "./../../assets/Images/Halls/All Halls/Newest_6.JPG";
import Top_Rated_1 from "./../../assets/Images/Halls/All Halls/Top_Rated_1.JPG";
import Top_Rated_2 from "./../../assets/Images/Halls/All Halls/Top_Rated_2.JPG";
import Top_Rated_3 from "./../../assets/Images/Halls/All Halls/Top_Rated_3.JPG";
import Top_Rated_4 from "./../../assets/Images/Halls/All Halls/Top_Rated_4.JPG";
import Top_Rated_5 from "./../../assets/Images/Halls/All Halls/Top_Rated_5.JPG";
import Top_Rated_6 from "./../../assets/Images/Halls/All Halls/Top_Rated_6.JPG";
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

  const halls = [
    {
      image: MeridienHeliopolisHotel,
      name: "Meridien Heliopolis Hotel",
      CLASSIFICATION: "Hotel",
      location: "Cairo",
      description:
        "Step into a breathtaking hall adorned with sculptured columns and artistic ceiling details, blending classical architecture with modern flair. The spacious layout flows seamlessly from a grand entrance to a main hall that accommodates large gatherings, making it ideal for both ceremonies and receptions. Dream-like colors and textures create a memorable, sophisticated atmosphere for your special day",
      link: "FirstHall",
      capacity: "300 - 500",
      rate: 5,
    },
    {
      image: GrandNileTower,
      name: "Grand Nile Tower",
      CLASSIFICATION: "Hotel",
      description:
        "This wedding hall features floor-to-ceiling windows that flood the space with natural light, offering stunning views and a warm, inviting ambiance. The open layout allows for versatile seating and decor arrangements, while greenery and light-colored walls enhance the fresh, contemporary feel-perfect for couples seeking a bright and airy celebration",
      location: "Cairo",
      link: "SecondHall",
      capacity: 500,
      rate: 3.5,
    },
    {
      image: SkyExecutiveResort,
      name: "Sky Executive Resort",
      CLASSIFICATION: "Hotel",
      description:
        "Designed for smaller gatherings, this venue boasts a cozy ceremony space with an eye-catching fireplace and oversized windows. The adjoining reception area features elegant tables, dramatic lighting, and tasteful decor, creating a classic yet intimate environment where every guest feels cherished",
      location: "Cairo",
      link: "ThirdHall",
      capacity: 400,
      rate: 4,
    },
    {
      image: TriumphHotelElTagamoa,
      name: "Sky Executive Resort",
      CLASSIFICATION: "Hotel",
      description:
        "With unique design elements like a “garden of columns” and textured stucco walls, this wedding hall is a haven for creativity and photographs. Distinct zones guide guests through a curated experience, from a photo gallery to a bouquet toss area, ensuring every moment is both beautiful and memorable",
      location: "Cairo",
      link: "FourthHall",
      capacity: 500,
      rate: 5,
    },
    {
      image: GardeniaHall,
      name: "Gardenia Hall",
      CLASSIFICATION: "hall",
      description:
        "Maximize your celebration with a hall designed for flexibility-convertible stages, movable partitions, and multi-purpose courtyards allow for smooth transitions between ceremony, dining, and dancing. Sustainable materials and thoughtful acoustics ensure comfort, style, and a personalized touch for every event",
      location: "Cairo - Alexandria",
      link: "FifthHall",
      capacity: "100 - 200",
      rate: 4.5,
    },
    {
      image: allHalls4,
      name: "The Nile Ritz-Carlton",
      description:
        "The largest ballroom in Downtown Cairo, Al Qahira Ballroom at The Nile Ritz-Carlton features 1,700 square meters of elegant space, grand foyers, and exquisite chandeliers. It is renowned for hosting the city’s most luxurious weddings and can be divided into five rooms for more intimate celebrations.",
      location: "Cairo",
      capacity: 250,
      rate: 4,
    },
    {
      image: allHalls5,
      name: "Alf Leila Wa Leila",
      description:
        "A historic and iconic venue, Alf Leila Wa Leila Ballroom has welcomed Egypt’s elite for decades. With 924 square meters of banquet space, it offers a blend of classic grandeur and modern amenities, perfect for glamorous wedding celebrations.",
      location: "Cairo",
      rate: 4.5,
    },
    {
      image: allHalls8,
      name: "Cleopatra Hall",
      description:
        "Located on the Nile, the Cleopatra Ballroom at Semiramis InterContinental Cairo accommodates up to 1,170 guests. Its modern luxury, river views, and versatile layout make it a top choice for large, elegant weddings.",
      location: "Cairo",
      rate: 3,
    },
    {
      image: allHalls9,
      name: "Tutankhamun Hall",
      description:
        "The Tutankhamun Ballroom at JW Marriott Hotel Cairo offers one of the city’s most spacious and versatile wedding venues. Its contemporary style and attentive service ensure a seamless, memorable experience for both grand and intimate celebrations.",
      location: "Cairo",
      rate: 5,
    },
    {
      image: allHalls10,
      name: "Marriott Mena House",
      description:
        "Famed for its breathtaking views of the Pyramids of Giza, Marriott Mena House offers a magical setting for weddings. Its lush gardens and luxurious ballrooms provide a romantic and unforgettable backdrop for your special day.",
      location: "Giza",
      rate: 2.5,
    },
    {
      image: allHalls11,
      name: "Royal Club",
      description:
        "Located on the banks of the Nile in Giza, Royal Club Mohamed Aly is celebrated for its regal ambiance and lush green surroundings. The venue’s elegant halls and serene river views make it a sought-after choice for sophisticated wedding ceremonies.",
      location: "Giza",
      rate: 5,
    },
    {
      image: allHalls11,
      name: "Royal Garden for Parties and Weddings",
      CLASSIFICATION: "Parks and clubs",
      description:
        "engagement - marriage contract - aqiqah - birthdays - private dinner - conferences ....) with integrated equipment that meets all your requirements from designing the kosh, DJ, video and photography for weddings, lighting systems in all parts of the place and a buffet of the most delicious tables according to your desire, and many additional services.",
      Address:
        "Address: Royal - El Mokattam - El Hadaba El Wosta - Modern Academy Street - Next to Easy Sports Club",
      location: "Giza",
      capacity: "300 - 500",
      rate: 5,
    },
  ];
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
                to={item.link}
                className="text-decoration-none text-black"
                key={index}
              >
                <div className="row scroll-container my-3">
                  <div className="col-md-12">
                    <div className="bg-light d-flex gap-5 scroll">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-3">
                            <img
                              loading="lazy"
                              src={item.image}
                              alt={item.name}
                              width="100%"
                              height="100%"
                              style={{ cursor: "pointer" }}
                              onClick={(e) => {
                                e.preventDefault();
                                setModalImage(item.image);
                                setModalOpen(true);
                                handleImageClick(item.image);
                              }}
                            />
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
          <img
            src={modalImage}
            alt="Hall"
            className={`modal-image ${showModalImage ? "show" : ""}`}
            style={{
              maxWidth: "70vw",
              maxHeight: "70vh",
              borderRadius: "8px",
              boxShadow: "0 2px 16px #000",
              transition:
                "transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s",
              transform: showModalImage ? "scale(1)" : "scale(0.8)",
              opacity: showModalImage ? 1 : 0,
            }}
            onClick={(e) => e.stopPropagation()}
          />
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
