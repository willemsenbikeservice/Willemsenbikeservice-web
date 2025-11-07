import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" className="logo" />
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <a href="/#diensten">Diensten</a>
          <a href="/#overons">Over ons</a>
          <a href="/#afspraak" className="cta-btn">📅 Plan Service</a>
        </nav>

        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <a href="/#diensten" onClick={() => setMenuOpen(false)}>Diensten</a>
          <a href="/#overons" onClick={() => setMenuOpen(false)}>Over ons</a>
          <a href="/#afspraak" className="cta-btn" onClick={() => setMenuOpen(false)}>📅 Plan Service</a>
        </div>
      )}
    </header>
  );
}
