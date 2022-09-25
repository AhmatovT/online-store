import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../Logo/Logi";
function Navbar(props) {
  const [activeNav, setActiveNav] = useState(false);

  const handleMenu = () => {
    setActiveNav(!activeNav);
  };
  return (
    <header>
      <Logo />
      <form action="">
        <input type="text" placeholder="Search..." name="" id="" />
        <button className="btn">
          <i class="bi bi-search"></i>
        </button>
      </form>
      <nav>
          <div className={!activeNav ? "nav_link" : "nav_active_link"}>
            <div className="logotp"><Logo /></div>
            <a href="/">Home</a>
            <a href="/">Profile</a>
            <a href="/signin">SignIn</a>
          </div>
        <i class="bi bi-cart3">
          <div className="cart_items">
            <i>1</i>
          </div>
        </i>
        <div className="menu_list">
          {activeNav ? (
            <i class="bi bi-x-lg" onClick={handleMenu}></i>
          ) : (
            <i class="bi bi-list" onClick={handleMenu}></i>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
