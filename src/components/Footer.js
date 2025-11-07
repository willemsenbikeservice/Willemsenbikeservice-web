import React from "react";
import "../App.css"; // gebruik de bestaande styles van je project

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Linker kolom */}
        <div className="footer-column">
          <h3 className="footer-title">Willemsen Bike Service</h3>
          <p>
            Vakmanschap en passie voor de fiets.<br />
            Betrouwbare herstellingen, zorgvuldig onderhoud en persoonlijke service in Riemst.
          </p>
        </div>

        {/* Middenkolom */}
        <div className="footer-column">
          <h4 className="footer-subtitle">Contact</h4>
          <p>
            📍 Arthur Meulemansstraat 7, 3770 Riemst<br />
            📞 <a href="tel:+31613107376">+31 6 13107376</a><br />
            ✉️ <a href="mailto:willemsenbikeservices@gmail.com">
              willemsenbikeservices@gmail.com
            </a><br />
            🌐 <a
              href="https://www.Willemsenbikeservice.be"
              target="_blank"
              rel="noreferrer"
            >
              www.Willemsenbikeservice.be
            </a>
          </p>
        </div>

        {/* Rechter kolom */}
        <div className="footer-column">
          <h4 className="footer-subtitle">Openingstijden</h4>
          <p>
            Op aanvraag — maandag t/m zondag<br />
            <span className="footer-note">
              Neem contact op voor een afspraak.
            </span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Willemsen Bike Service – Alle rechten voorbehouden
      </div>
    </footer>
  );
};

export default Footer;
