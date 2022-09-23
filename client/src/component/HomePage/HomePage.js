import React from "react";
import Catalog from "../Catalog/Catalog";
import Carusel from "./Carusel";
import "./HomePage.css";
function HomePage(props) {
  return (
    <div className="containers">
      <Carusel />
      <Catalog />
      <Carusel />
    </div>
  );
}

export default HomePage;
