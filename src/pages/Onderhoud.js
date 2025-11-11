import React from "react";
import "../App.css";

export default function Onderhoud() {
  return (
    <section id="onderhoud">
      <div className="container">
        <div className="diensten-header">
          <h2>Fiets Onderhoud</h2>
          <p>
            Regelmatig onderhoud houdt je fiets betrouwbaar, veilig en soepel.
            Hieronder vind je onze onderhoudsbeurten, reinigingspakketten en
            voordelige abonnementen. Alle bedragen zijn{" "}
            <strong>exclusief materiaal</strong> en inclusief btw.
          </p>
          <div className="diensten-divider"></div>
        </div>

        {/* === 1. ONDERHOUDSBEURTEN === */}
        <div className="prijs-sectie">
          <h3>Onderhoudsbeurten</h3>
          <table className="prijstabel">
            <thead>
              <tr>
                <th>Beurt</th>
                <th>Omschrijving</th>
                <th>Prijs (excl. materiaal)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kleine Beurt</td>
                <td>
                  Controle van remmen, versnellingen, banden, bouten en ketting.
                  Inclusief smering en afstelling waar nodig.
                </td>
                <td>€ 45</td>
              </tr>
              <tr>
                <td>Grote Beurt</td>
                <td>
                  Volledige technische controle + afstelling, reiniging en
                  smering van aandrijving, wielcontrole en veiligheidscheck.
                </td>
                <td>€ 75</td>
              </tr>
              <tr>
                <td>E-Bike Beurt</td>
                <td>
                  Mechanische controle + software-update, kabel- en accudiagnose.
                  Inclusief systeemreset en firmwarecheck.
                </td>
                <td>€ 85</td>
              </tr>
              <tr>
                <td>Race / MTB Pro-Beurt</td>
                <td>
                  Volledige revisie met ultrasone aandrijvingsreiniging,
                  Silca-waxbehandeling, lagerservice en afstelling.
                </td>
                <td>€ 95</td>
              </tr>
              <tr>
                <td>Wax & Schoonmaak Beurt</td>
                <td>
                  Volledige fietsreiniging, ketting-hotwax, polish-afwerking en
                  framebescherming. Ideaal voor na-rit onderhoud.
                </td>
                <td>€ 60</td>
              </tr>
              <tr>
                <td>Drivetrain Clean-Up</td>
                <td>
                  Demontage ketting, cassette en crank; grondige ontvetting en
                  opnieuw waxen voor optimale efficiëntie.
                </td>
                <td>€ 40</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* === 2. WBS ABONNEMENTEN === */}
        <div className="prijs-sectie">
          <h3>WBS Service-Abonnementen</h3>
          <table className="prijstabel">
            <thead>
              <tr>
                <th>Abonnement</th>
                <th>Inhoud</th>
                <th>Prijs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>WBS Basic</td>
                <td>
                  1 kleine beurt per kwartaal (4×/jaar) inclusief rem- en
                  schakelafstelling. Perfect voor dagelijks gebruik.
                </td>
                <td>€ 120/jaar</td>
              </tr>
              <tr>
                <td>WBS Clean+</td>
                <td>
                  Maandelijkse schoonmaakbeurt inclusief drivetrain clean en
                  frame-reiniging. Altijd een nette fiets, zonder moeite.
                </td>
                <td>€ 25/maand</td>
              </tr>
              <tr>
                <td>WBS WaxCare</td>
                <td>
                  Maandelijkse ketting-hotwaxservice met aandrijvingsinspectie en
                  smering. Ideaal voor sportieve rijders.
                </td>
                <td>€ 20/maand</td>
              </tr>
              <tr>
                <td>WBS Pro Service</td>
                <td>
                  1 grote beurt + 1 schoonmaak/wax-beurt per kwartaal (4×/jaar),
                  inclusief prioriteit bij planning.
                </td>
                <td>€ 75/kwartaal</td>
              </tr>
              <tr>
                <td>WBS All-Risk+</td>
                <td>
                  Geen servicekosten bij herstellingen, prioriteit bij afspraken
                  en gratis vervangfiets bij onderhoud. Alles-in-één pakket voor
                  zorgeloos rijden.
                </td>
                <td>€ 30/maand of € 300/jaar</td>
              </tr>
              <tr>
                <td>Pro Season Prep</td>
                <td>
                  Voorjaar- en winterbeurt met complete reiniging, hotwax,
                  lagerservice en afstelling. Ideaal voor seizoenswissel.
                </td>
                <td>€ 150/seizoen</td>
              </tr>
              <tr>
                <td>Ride Clean Card</td>
                <td>
                  10× Bike Clean of Wax-beurt vooraf betaald met korting.
                  Handig voor vaste klanten of teams.
                </td>
                <td>€ 120</td>
              </tr>
              <tr>
                <td>Business Fleet Care</td>
                <td>
                  Zakelijke service voor bedrijven met meerdere fietsen:
                  periodiek onderhoud + was/wax + haal- & brengservice.
                </td>
                <td>Op aanvraag</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* === INFO === */}
        <div className="prijs-info">
          <p>
            💬 Alle prijzen zijn <strong>exclusief onderdelen</strong>.  
            Abonnementen zijn persoonsgebonden en 12 maanden geldig.  
            Ideaal voor rijders die hun fiets het hele jaar in topvorm willen
            houden.
          </p>
          <p>
            📅 Je ontvangt automatisch een herinnering per e-mail wanneer jouw
            volgende service gepland kan worden.
          </p>
          <p>
            🚚 Pickup Service beschikbaar binnen regio Riemst – handig bij
            slecht weer of drukke agenda.
          </p>
        </div>

{/* === FORMULIER: ONDERHOUD AANVRAAG === */}
<div className="form" style={{ marginTop: "60px" }}>
  <div className="form-title">
    <h2>Plan onderhoud</h2>
    <p>
      Vul hieronder je gegevens in en kies welk type onderhoud je wenst.
      We nemen contact op om een geschikt moment af te spreken.
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
    <select name="onderhoudtype" required>
      <option value="">Kies een type onderhoud</option>
      <option value="kleine beurt">Kleine Beurt</option>
      <option value="grote beurt">Grote Beurt</option>
      <option value="drivetrain clean">Drivetrain Clean / Hotwax</option>
      <option value="wax abonnement">Maandelijks Wax Abonnement</option>
    </select>
    <textarea
      name="message"
      rows="5"
      placeholder="Eventuele opmerkingen of bijzonderheden..."
    ></textarea>

    <button type="submit" className="btn">
      Verstuur onderhoudsaanvraag
    </button>
  </form>
</div>

      </div>
    </section>
  );
}
