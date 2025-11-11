import React from "react";
import "../App.css";

export default function Projecten() {
  return (
    <section id="projecten">
      <div className="container">
        {/* === HEADER === */}
        <div className="diensten-header">
          <h2>Projecten &amp; Maatwerk</h2>
          <p>
            Bij <strong>Willemsen Bike Service</strong> realiseren we unieke
            projecten — van op maat opgebouwde fietsen tot speciale
            race- en gravel-builds. Binnenkort vind je hier ons
            eerste volledige project uit eigen werkplaats.
          </p>
          <div className="diensten-divider"></div>
        </div>

        {/* === BINNENKORT BESCHIKBAAR KAART === */}
        <div className="project-grid">
          <div className="project-card">
            <div className="project-placeholder">
              <div className="project-badge">Binnenkort beschikbaar</div>
              <h3>🚲 Ons eerste project komt eraan</h3>
              <p>
                We werken momenteel aan onze eerste officiële WBS-custom build.
                Binnenkort zie je hier een volledig opgebouwde fiets met oog
                voor detail, performance en stijl — geheel volgens de
                <strong> Willemsen Bike Service</strong>-standaard.
              </p>

              <div className="project-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        {/* === INFOBLOCK === */}
        <div className="prijs-info">
          <p>
            🛠️ Heb je zelf een idee voor een custom build of een project op
            maat? Wij helpen je bij de selectie van frame, groepset, wielen,
            afmontage en personalisatie — alles in WBS-stijl.
          </p>
          <p>
            💡 Zowel race-, gravel-, MTB- als e-bike-projecten zijn mogelijk.
            Elk detail wordt vooraf besproken zodat jij precies krijgt wat je
            zoekt.
          </p>
        </div>

                {/* === FORMULIER: PROJECT AANVRAAG === */}
        <div className="form" style={{ marginTop: "60px" }}>
          <div className="form-title">
            <h2>Bespreek jouw project</h2>
            <p>
              Vul je gegevens in en vertel kort wat je in gedachten hebt —
              we nemen contact met je op om de mogelijkheden te bespreken.
            </p>
            <div className="form-divider"></div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.emailjs
                .sendForm(
                  "service_9n4vqny",
                  "template_g27566l",
                  e.target,
                  "qPKid3V17nWCtS_NJ"
                )
                .then(() => {
                  alert("✅ Bedankt! We nemen spoedig contact met je op.");
                  e.target.reset();
                })
                .catch(() =>
                  alert("❌ Er ging iets mis. Probeer het later opnieuw.")
                );
            }}
          >
            <input name="name" placeholder="Naam" required />
            <input name="email" type="email" placeholder="E-mail" required />
            <input name="phone" placeholder="Telefoonnummer" />
            <select name="projecttype" required>
              <option value="">Kies een projecttype</option>
              <option value="racefiets">Racefiets</option>
              <option value="mtb">Mountainbike</option>
              <option value="gravel">Gravelbike</option>
              <option value="ebike">E-bike</option>
              <option value="anders">Anders / op maat</option>
            </select>
            <textarea
              name="message"
              rows="5"
              placeholder="Beschrijf jouw idee of wensen..."
            ></textarea>

            <button type="submit" className="btn">
              Verstuur aanvraag
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

