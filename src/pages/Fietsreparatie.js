import React from "react";
import "../App.css";

export default function Fietsreparatie() {
  return (
    <section id="fietsreparatie">
      <div className="container">
        <div className="diensten-header">
          <h2>Fietsreparaties</h2>
          <p>
            Volledig prijsoverzicht van alle herstellingen en onderhoudsdiensten.
            Alle bedragen zijn <strong>exclusief materiaal</strong> en inclusief btw.
          </p>
          <div className="diensten-divider"></div>
        </div>

        {/* === 1. DIAGNOSE & CONTROLE === */}
        <div className="prijs-sectie">
          <h3>Diagnose & Controle</h3>
          <table className="prijstabel">
            <thead>
              <tr>
                <th>Service</th>
                <th>Omschrijving</th>
                <th>Prijs (excl. materiaal)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basisdiagnose</td>
                <td>Volledige controle van fiets, remmen, versnellingen en wielen</td>
                <td>€ 15</td>
              </tr>
              <tr>
                <td>Uitgebreide diagnose</td>
                <td>Technische controle + offerte-rapportage</td>
                <td>€ 25</td>
              </tr>
              <tr>
                <td>Veiligheidscontrole</td>
                <td>Remmen, banden, stuur, lagers en verlichting controleren</td>
                <td>€ 10</td>
              </tr>
              <tr>
                <td>Padhaak richten / uitlijnen</td>
                <td>Correctie derailleurpad voor zuiver schakelen</td>
                <td>€ 15</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* === 2. REMMEN & VERSNELLINGEN === */}
        <div className="prijs-sectie">
          <h3>Remmen & Versnellingen</h3>
          <table className="prijstabel">
            <thead>
              <tr>
                <th>Service</th>
                <th>Omschrijving</th>
                <th>Prijs (excl. materiaal)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Remblokjes vervangen</td><td>Montage en afstelling (V-brake / schijfrem)</td><td>€ 15</td></tr>
              <tr><td>Remkabel vervangen</td><td>Binnen- en buitenkabel vervangen + afstellen</td><td>€ 17,50</td></tr>
              <tr><td>Hydraulische remmen ontluchten</td><td>Ontluchting remset (Shimano, SRAM, Magura, Tektro)</td><td>€ 17,50</td></tr>
              <tr><td>Remschijf vervangen</td><td>Nieuwe schijf monteren + remklauw reinigen</td><td>€ 12,50</td></tr>
              <tr><td>Versnellingskabel vervangen</td><td>Kabel vervangen + derailleur/naaf afstellen</td><td>€ 15</td></tr>
              <tr><td>Derailleur vervangen / afstellen</td><td>Montage + fijne afstelling schakelsysteem</td><td>€ 22,50</td></tr>
              <tr><td>Schakelsysteem revisie</td><td>Volledige reiniging, smering en afstelling</td><td>€ 27,50</td></tr>
            </tbody>
          </table>
        </div>

        {/* === 3. WIELEN & BANDEN === */}
        <div className="prijs-sectie">
          <h3>Wielen & Banden</h3>
          <table className="prijstabel">
            <thead>
              <tr>
                <th>Service</th>
                <th>Omschrijving</th>
                <th>Prijs (excl. materiaal)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Binnenband vervangen</td><td>Inclusief demontage wiel + drukcontrole</td><td>€ 7,50</td></tr>
              <tr><td>Buitenband vervangen</td><td>Montage nieuwe buitenband</td><td>€ 15</td></tr>
              <tr><td>Tubeless set-up / sealant vernieuwen</td><td>Per wiel, reiniging + nieuwe vloeistof</td><td>€ 7,50</td></tr>
              <tr><td>Wiel richten</td><td>Kleine slag corrigeren + spaakspanning controleren</td><td>€ 30</td></tr>
              <tr><td>Wiel volledig herspaken</td><td>Nieuwe spaken + centreren</td><td>Offerte</td></tr>
              <tr><td>Wielopbouw (nieuw wiel)</td><td>Nieuwe velg, spaken en naaf opgebouwd op maat</td><td>Offerte</td></tr>
              <tr><td>Naafservice</td><td>Reiniging, lagers smeren of vervangen (voor- of achterwiel)</td><td>€ 25</td></tr>
              <tr><td>Body vervangen</td><td>Cassettebody vervangen of smeren + lagers check</td><td>€ 12,50</td></tr>
              <tr><td>Wiellagers vervangen</td><td>Vervanging losse of cartridge-lagers (per wiel)</td><td>€ 22,50</td></tr>
              <tr><td>Tubeless conversie compleet</td><td>Velgtape, ventielen, sealant – setprijs per wiel</td><td>€ 20</td></tr>
              <tr><td>Velgtape vervangen</td><td>Nieuwe velgtape aanbrengen + heropbouw band</td><td>€ 7,50</td></tr>
            </tbody>
          </table>
        </div>

        {/* === 4. TRAPAS, KETTING & AANDRIJVING === */}
        <div className="prijs-sectie">
          <h3>Trapas, Ketting & Aandrijving</h3>
          <table className="prijstabel">
            <thead>
              <tr><th>Service</th><th>Omschrijving</th><th>Prijs (excl. materiaal)</th></tr>
            </thead>
            <tbody>
              <tr><td>Ketting vervangen</td><td>Nieuwe ketting plaatsen</td><td>€ 20</td></tr>
              <tr><td>Cassette / freewheel vervangen</td><td>Demontage, reiniging, montage</td><td>€ 25</td></tr>
              <tr><td>Crankstel vervangen</td><td>Montage nieuw crankstel + afstelling</td><td>€ 17,50</td></tr>
              <tr><td>Trapas onderhoud / vervangen</td><td>Demontage, smering of vervanging</td><td>€ 35</td></tr>
              <tr><td>Volledige aandrijving revisie</td><td>Ultrasone reiniging + heropbouw</td><td>€ 60</td></tr>
              <tr><td>Pedalen vervangen / service</td><td>Reiniging schroefdraad, montage en smering</td><td>€ 10</td></tr>
            </tbody>
          </table>
        </div>

        {/* === 5. STUUR, BALHOOFD & FRAMEWERK === */}
        <div className="prijs-sectie">
          <h3>Stuur, Balhoofd & Framewerk</h3>
          <table className="prijstabel">
            <thead>
              <tr><th>Service</th><th>Omschrijving</th><th>Prijs (excl. materiaal)</th></tr>
            </thead>
            <tbody>
              <tr><td>Balhoofd revisie</td><td>Reinigen, vetten en afstellen</td><td>€ 25</td></tr>
              <tr><td>Stuurpen / stuur vervangen</td><td>Montage + afstelling ergonomie</td><td>€ 25</td></tr>
              <tr><td>Handvatten of stuurlint vervangen</td><td>Oude verwijderen, nieuwe plaatsen</td><td>€ 12,50</td></tr>
              <tr><td>Zadel / zadelpen vervangen</td><td>Montage + afstelling hoogte & hoek</td><td>€ 12,50</td></tr>
              <tr><td>Frame-inspectie</td><td>Controle op scheuren of slijtage</td><td>€ 15</td></tr>
            </tbody>
          </table>
        </div>

        {/* === 6. E-BIKE & ELEKTRONICA === */}
        <div className="prijs-sectie">
          <h3>E-bike & Elektronica</h3>
          <table className="prijstabel">
            <thead>
              <tr><th>Service</th><th>Omschrijving</th><th>Prijs (excl. materiaal)</th></tr>
            </thead>
            <tbody>
              <tr><td>E-bike diagnose</td><td>Analyse contactpunten + visuele controle</td><td>€ 22,50</td></tr>
              <tr><td>Software-update motor / display</td><td>Via fabrikantsoftware of servicetool</td><td>€ 25</td></tr>
              <tr><td>Bekabeling vervangen</td><td>Montage + kabelmanagement</td><td>€ 27,50</td></tr>
              <tr><td>Sensor / controller vervangen</td><td>Montage + kalibratie indien nodig</td><td>€ 25</td></tr>
              <tr><td>Motorservice / revisie</td><td>Inspectie, lagerservice of verzendservice fabrikant (prijs afhankelijk van type)</td><td>v.a. € 45</td></tr>
              <tr><td>Shimano Di2 Servicebeurt</td><td>Reiniging contactpunten, firmware-update en afstelling</td><td>€ 20</td></tr>
              <tr><td>SRAM AXS Servicebeurt</td><td>Firmware-update, kalibratie en contactpunten reinigen</td><td>€ 20</td></tr>
              <tr><td>Ladercontrole / connectorreiniging</td><td>Inspectie en reiniging laadconnectoren</td><td>€ 15</td></tr>
            </tbody>
          </table>
        </div>

        {/* === 7. MONTAGES & OVERIGE === */}
        <div className="prijs-sectie">
          <h3>Montages & Overige Services</h3>
          <table className="prijstabel">
            <thead>
              <tr><th>Service</th><th>Omschrijving</th><th>Prijs (excl. materiaal)</th></tr>
            </thead>
            <tbody>
              <tr><td>Nieuwe fiets opbouwen</td><td>Van losse levering tot rijklaar montage</td><td>Offerte</td></tr>
              <tr><td>Accessoiremontage</td><td>Bagagedrager, spatborden, standaard, bel, lichten…</td><td>€ 10 – € 25</td></tr>
              <tr><td>Verlichting vervangen</td><td>Montage nieuwe lampen of dynamo-systeem</td><td>€ 15 – € 20</td></tr>
              <tr><td>Transport / ophaaldienst</td><td>Binnen regio Riemst (heen of terugrit)</td><td>€ 25</td></tr>
            </tbody>
          </table>
        </div>

        {/* === 8. REINIGING & DETAILING === */}
        <div className="prijs-sectie">
          <h3>Reiniging & Detailing</h3>
          <table className="prijstabel">
            <thead>
              <tr><th>Service</th><th>Omschrijving</th><th>Prijs (excl. materiaal)</th></tr>
            </thead>
            <tbody>
              <tr><td>Basis Bike Clean</td><td>Snelle reiniging frame, wielen en ketting</td><td>€ 15</td></tr>
              <tr><td>Premium Bike Detailing</td><td>Dieptereiniging, ontvetting, polish + bescherming</td><td>€ 37,50</td></tr>
              <tr><td>Drivetrain Clean</td><td>Demontage ketting en cassette, ontvetten + smering</td><td>€ 27,50</td></tr>
              <tr><td>Drivetrain Clean + Hotwax</td><td>Ultrasone reiniging + hotwax behandeling</td><td>€ 45</td></tr>
              <tr><td>Ketting opnieuw waxen</td><td>Nieuwe waxlaag aanbrengen</td><td>€ 17,50</td></tr>
              <tr><td>Framecoating bescherming</td><td>Waterafstotende coating handmatig aangebracht</td><td>€ 25</td></tr>
              <tr><td>Framebescherming folie</td><td>Transparante folie op kwetsbare zones</td><td>€ 35</td></tr>
              <tr><td>Detailpakket Pro</td><td>Volledige bike clean + drivetrain hotwax + coating — showroomresultaat</td><td>€ 45</td></tr>
            </tbody>
          </table>
        </div>

        {/* === INFO === */}
{/* === FORMULIER: REPARATIE AANVRAAG === */}
<div className="form" style={{ marginTop: "60px" }}>
  <div className="form-title">
    <h2>Plan een reparatie</h2>
    <p>
      Vul je gegevens in en geef kort aan wat er met je fiets aan de hand is.
      We nemen contact op om de reparatie in te plannen.
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
    <textarea
      name="message"
      rows="5"
      placeholder="Beschrijf het probleem of gewenste reparatie..."
    ></textarea>

    <button type="submit" className="btn">
      Verstuur reparatie-aanvraag
    </button>
  </form>
</div>

      </div>
    </section>
  );
}
