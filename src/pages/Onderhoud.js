import React from "react";

export default function Onderhoud() {
  return (
    <main className="page container" style={{ paddingTop: 100, paddingBottom: 60 }}>
      <h1>Onderhoud</h1>
      <p>Regelmatig onderhoud voorkomt pech en verlengt de levensduur van je fiets.</p>
      <h3>Pakketten</h3>
      <ul>
        <li>Klein onderhoud — basischeck</li>
        <li>Groot onderhoud — volledige revisie</li>
        <li>Seizoenscheck — lente/herfst controle</li>
      </ul>
      <p style={{ marginTop: 20 }}>
        👉 Plan direct een afspraak via de <a href="/#afspraak">service planner</a>.
      </p>
    </main>
  );
}
