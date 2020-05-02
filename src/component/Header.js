import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header class="header-login-signup">
        <div class="header-limiter">
          <h1>
            <a href="/">
              Kalijaga<span>Coding</span>
            </a>
          </h1>
          <nav>
            <Link to="/">Home</Link>
            <a class="selected">
              <Link to="/">About App</Link>
            </a>
            <a>
              <Link to="/">Contact Us</Link>
            </a>
          </nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
