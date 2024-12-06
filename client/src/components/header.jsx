import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Online Blood Donation Management System</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/donors">Donors</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Header;
