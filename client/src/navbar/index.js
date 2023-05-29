//import "./styles.css";

import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";
import userProfile from "../img/userProfile.png";

function Header() {
    return (
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Site Logo" />
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/">Chats</Link>
        </div>
        <div className="profile">
          <Link to="/">
            <img src={userProfile} alt="Profile Logo" />
          </Link>
        </div>
      </header>
    );
  }

  export default Header;