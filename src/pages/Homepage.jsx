import { Header, Footer } from "../components";
import { Outlet, Navigate } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />
      <Navigate to="/items" />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePage;
