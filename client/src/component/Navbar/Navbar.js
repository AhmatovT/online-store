import React from "react";
import Logo from "../Logo/Logi";
import {Link} from 'react-router-dom'
import "./Navbar.css";
function Navbar(props) {
  return (
    <header className="header">
      <div className="Brand">
        <Logo />
      </div>
      <ul className="nav_link">
        <li>
          <form class="search-container">
            <input
              type="text"
              id="search-bar"
              placeholder="What can I help you with today?"
            />
          </form>
        </li>
        <li>
        <button className="button"><i class="fa-solid fa-magnifying-glass"></i></button>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signIn">SignIn</Link>
        </li>
        <li>
          <Link to="/">Profile</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
