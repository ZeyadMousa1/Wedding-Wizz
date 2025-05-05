import React from "react";
import Search from "./Search";
import TopRated from "./topRated";
import Newest from "./Newest";
import AllTheHalls from "./allTheHalls";
import Footer from "../Footer/Footer";
import HallsSlider from "../HallsSlider/HallsSlider";
import NewestSlider from "../HallsSlider/NewestSlider";

function Halls() {
  return (
    <>
      <Search />
      {/* <TopRated /> */}
      <HallsSlider />
      {/* <Newest /> */}
      <NewestSlider />
      <AllTheHalls />
      <Footer />
    </>
  );
}

export default Halls;
