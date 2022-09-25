import React from "react";
import Category from "../Category/Category";
import Carusel from "./Carusel";
import Card from "../Card/card";
import "./HomePage.css";
function HomePage() {
  return (
    <div className="containers">
      <Carusel />
      <Category />
      <Card />
    </div>
  );
}

export default HomePage;
