import React from "react";
import Home from "../../pages/Main/Home";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

function Main() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
