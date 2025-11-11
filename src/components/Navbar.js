import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll smooth naar sectie
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Handle navigatie voor alle pagina's
  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      // wacht even tot home geladen is en scroll dan
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
  };

  // Detecteer actieve sectie bij scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header">
      {/* Logo links */}
      <Link to="/" className="logo-link" onClick={() => handleNavClick("#home")}>
        <img src="/images/logo.png" alt="Willemsen Bike Service" className="logo-img" />
      </Link>

      {/* Navigatie */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
        >
          Home
        </a>
        <a
          href="#diensten"
          className={activeSection === "diensten" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#diensten");
          }}
        >
          Diensten
        </a>
        <a
          href="#overons"
          className={activeSection === "overons" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#overons");
          }}
        >
          Over ons
        </a>
      </nav>

      {/* Knop rechts */}
      <a
        href="#afspraak"
        className={`cta-btn ${activeSection === "afspraak" ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("#afspraak");
        }}
      >
        Plan Afspraak
      </a>

      {/* Hamburger-icoon voor mobiel */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </div>
    </header>
  );
}

export default Navbar;
