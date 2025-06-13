import React from "react";
import AllTheHalls from "./allTheHalls";
import Footer from "../Footer/Footer";
import HallsSlider from "../HallsSlider/HallsSlider";
import NewestSlider from "../HallsSlider/NewestSlider";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

function Halls() {
  return (
    <>
      <HallsSlider />
      <NewestSlider />
      <AllTheHalls />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default Halls;
