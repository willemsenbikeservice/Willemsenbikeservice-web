import React from "react";

export default function Fietsreparatie() {
  return (
    <main className="page container" style={{ paddingTop: 100, paddingBottom: 60 }}>
      <h1>Fietsreparatie</h1>
      <p>Wij repareren stadsfietsen, e-bikes, MTB en racefietsen. Snel, eerlijk en met garantie.</p>
      <h3>Veelvoorkomende reparaties</h3>
      <ul>
        <li>Lekke band vervangen</li>
        <li>Remmen en versnellingen afstellen</li>
        <li>Ketting, tandwielen en lagers vervangen</li>
        <li>Wielen richten of nieuwe spaken</li>
      </ul>
      <p style={{ marginTop: 20 }}>
        👉 Plan direct een afspraak via de <a href="/#afspraak">service planner</a>.
      </p>
    </main>
  );
}
