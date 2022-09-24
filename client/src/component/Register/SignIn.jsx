import React from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
function SignIn() {
  return (
    <div className="login">
      <Link className="active link_to" to="#">
        signin
      </Link>
      <Link className="nonactive link_to" to="/signup">
        signup
      </Link>
      <div className="form-cart">
        <input type="text" className="text" placeholder="Email..." />
        <span className="title">Email</span>
        <input type="text" className="text" placeholder="Password..." />
        <span className="title">Password</span>
        <button className="signin">Sign In</button>
        <hr />
        <Link className="sign_to" to="#">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}
export default SignIn;
