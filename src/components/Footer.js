import React from "react";

export default function Footer() {
  return (
    <footer className="footer animate-reveal">
      <div className="container footer-grid">
        <div>
          <h4>Willemsen Bike Service</h4>
          <p>Betrouwbare service & onderhoud.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>info@willemsenbike.nl</p>
          <p>Tel: 06-XXXX XXXX</p>
        </div>
        <div>
          <h4>Adres</h4>
          <p>Uw Straat 12<br />Riemst, België</p>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: 15 }}>
        © 2025 Willemsen Bike Service
      </div>
    </footer>
  );
}
