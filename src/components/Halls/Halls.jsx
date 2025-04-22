import React from "react";
import { Link } from "react-router-dom";
// import allHalls6 from "./../../assets/Images/Halls/All Halls/All_Halls_6.jpg";
// import allHalls7 from "./../../assets/Images/Halls/All Halls/All_Halls_7.jpg";
// import allHalls8 from "./../../assets/Images/Halls/All Halls/All_Halls_8.jpg";
// import allHalls9 from "./../../assets/Images/Halls/All Halls/All_Halls_9.jpg";
// import allHalls10 from "./../../assets/Images/Halls/All Halls/All_Halls_10.jpg";
import Search from "./search";
import TopRated from "./topRated";
import Newest from "./Newest";
import AllTheHalls from "./allTheHalls";
import Footer from "../Footer/Footer";

function Halls() {
  return (
    <>
      <Search />
      <TopRated />
      <Newest />
      <AllTheHalls />
      <Footer />
    </>
  );
}

export default Halls;
