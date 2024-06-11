import { Header, Footer } from "../components";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <Navigate to="/items" />}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePage;
