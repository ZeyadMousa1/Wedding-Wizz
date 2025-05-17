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
import HallDetails from "./components/HallDetails/HallDetails";
import UserContextProvider from "./context/userContext";
import { AuthProvider } from "./context/AuthContext";

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
      <AuthProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
