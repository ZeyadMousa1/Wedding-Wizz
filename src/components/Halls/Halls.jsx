import React from "react";
import AllTheHalls from "./allTheHalls";
import Footer from "../Footer/Footer";
import HallsSlider from "../HallsSlider/HallsSlider";
import NewestSlider from "../HallsSlider/NewestSlider";

function Halls() {
  return (
    <>
      <HallsSlider />
      <NewestSlider />
      <AllTheHalls />
      <Footer />
    </>
  );
}

export default Halls;
