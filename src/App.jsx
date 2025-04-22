import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
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
import FirstHall from "./components/HallDetails/FirstHall";
import SecondHall from "./components/HallDetails/SecondHall";
import ThirdHall from "./components/HallDetails/ThirdHall";
import FourthHall from "./components/HallDetails/FourthHall";
import FifthHall from "./components/HallDetails/FifthHall";

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
      { path: "Halls/FirstHall", element: <FirstHall /> },
      { path: "Halls/SecondHall", element: <SecondHall /> },
      { path: "Halls/ThirdHall", element: <ThirdHall /> },
      { path: "Halls/FourthHall", element: <FourthHall /> },
      { path: "Halls/FifthHall", element: <FifthHall /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function LayoutWithNavbarControl() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isLayout = location.pathname === "/layout"; // Adjust if you have a layout route

  return (
    <>
      {isHome && (
        <Header>
          <Navbar />
        </Header>
      )}
      {!isHome && !isLayout && <Navbar />}
      <Outlet /> {/* Render child routes */}
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
