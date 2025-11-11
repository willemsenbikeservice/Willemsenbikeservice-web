import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page container" style={{ paddingTop: 120, paddingBottom: 80, textAlign: "center" }}>
      <h1>Pagina niet gevonden</h1>
      <p>Oeps! Deze pagina bestaat niet (meer).</p>
      <Link to="/" className="btn" style={{ marginTop: 20 }}>Terug naar Home</Link>
    </main>
  );
}
