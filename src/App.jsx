import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Halls from "./components/Halls/Halls";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
// import MeridienHeliopolisHotel from "./components/HallDetails/MeridienHeliopolisHotel";
// import SkyExecutiveResort from "./components/HallDetails/SkyExecutiveResort";
// import GardeniaHall from "./components/HallDetails/GardeniaHall";
// import GrandNileTower from "./components/HallDetails/GrandNileTower";
// import TriumphHotelElTagamoa from "./components/HallDetails/TriumphHotelElTagamoa";
// import TheNileRitzCarlton from "./components/HallDetails/TheNileRitzCarlton";
import HallDetails from "./components/HallDetails/HallDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithNavbarControl />,
    children: [
      { index: true, element: <Home /> },
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
      { path: "Halls", element: <Halls /> },
      // {
      //   path: "Halls/MeridienHeliopolisHotel",
      //   element: <MeridienHeliopolisHotel />,
      // },
      // { path: "Halls/GrandNileTower", element: <GrandNileTower /> },
      // { path: "Halls/SkyExecutiveResort", element: <SkyExecutiveResort /> },
      // {
      //   path: "Halls/TriumphHotelElTagamoa",
      //   element: <TriumphHotelElTagamoa />,
      // },
      // { path: "Halls/GardeniaHall", element: <GardeniaHall /> },
      // { path: "Halls/TheNileRitzCarlton", element: <TheNileRitzCarlton /> },
      { path: "Halls/:hallId", element: <HallDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function LayoutWithNavbarControl() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isLayout = location.pathname === "/layout";

  return (
    <>
      {isHome && (
        <Header>
          <Navbar />
        </Header>
      )}
      {!isHome && !isLayout && <Navbar />}
      <Outlet />
    </>
  );
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
