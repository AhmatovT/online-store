import React from "react";
import Catalog from "../Catalog/Catalog";
import Carusel from "./Carusel";
import Card from "../Card/card";
import "./HomePage.css";
function HomePage() {
  return (
    <div className="containers">
      <Carusel />
      <Catalog />
      <Carusel />
      <Card />
    </div>
  );
}

export default HomePage;
