import React from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
function Signup() {
  return (
    <div className="register">
      <Link className="nonactive link_to" to="/signin">
        signin
      </Link>
      <Link className="active link_to" to="/signup">
        signup
      </Link>
      <div className="form-cart">
        <input type="text" className="text" placeholder="Username..." />
        <span className="title">UserName</span>
        <input type="text" className="text" placeholder="Email..." />
        <span className="title">Email</span>
        <input type="text" className="text" placeholder="Password..." />
        <span className="title">Password</span>
        <button className="signin">Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
