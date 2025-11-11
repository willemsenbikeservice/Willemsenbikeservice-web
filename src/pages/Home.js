import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

export default function Home() {
  const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [fileData, setFileData] = useState(null);
  const formRef = useRef();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Slideshow
  useEffect(() => {
    const it = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(it);
  }, [images.length]);

  // Scroll animaties
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("reveal-visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-reveal").forEach((el) => obs.observe(el));
  }, []);

  // Tijdslots genereren
  function generateTimeSlots() {
    const slots = [];
    let hour = 9;
    let minute = 30;
    while (hour < 18 || (hour === 18 && minute === 0)) {
      const formatted = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      slots.push(formatted);
      minute += 30;
      if (minute === 60) {
        hour++;
        minute = 0;
      }
    }
    return slots;
  }

  // 📎 Bestand inlezen (blijft actief maar niet zichtbaar)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Bestand is te groot. Kies een bestand kleiner dan 2 MB.");
        e.target.value = null;
        return;
      }
      const reader = new FileReader();
      reader.onload = () => setFileData(reader.result);
      reader.readAsDataURL(file);
    } else {
      setFileData(null);
    }
  };

  // E-mails versturen (klant + eigenaar)
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_9n4vqny";
    const publicKey = "qPKid3V17nWCtS_NJ";

    // 1️⃣ Stuur bevestiging naar klant
    emailjs
      .sendForm(serviceID, "template_9vynnxj", formRef.current, publicKey)
      .then(() => {
        console.log("✅ Klantbevestiging verzonden.");

        // 2️⃣ Stuur melding naar Willemsen Bike Service (inclusief bestand)
        const params = {
          name: formRef.current.name.value,
          email: formRef.current.email.value,
          phone: formRef.current.phone.value,
          message: formRef.current.message.value,
          date: selectedDate,
          time: selectedTime,
          file: fileData || "Geen bestand toegevoegd",
        };

        return emailjs.send(serviceID, "template_g27566l", params, publicKey);
      })
      .then(() => {
        console.log("📩 Interne melding verzonden.");
        setLoading(false);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);
        formRef.current.reset();
        setSelectedDate("");
        setSelectedTime("");
        setFileData(null);
      })
      .catch((err) => {
        console.error("❌ Email fout:", err);
        setLoading(false);
        alert("Er ging iets mis. Probeer opnieuw.");
      });
  };

  return (
    <>
      {/* HERO */}
      <section id="home" className="hero fade" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content animate-fade">
          <h1>Willemsen Bike Service</h1>
          <p>Professionele fietsreparaties en onderhoud — eerlijk, snel en betrouwbaar.</p>
          <a href="#afspraak" className="btn">Plan Service</a>
        </div>
      </section>

      {/* DIENSTEN */}
<section id="diensten" className="content">
  <div className="container">
    <div className="diensten-header">
      <h2>Onze Diensten</h2>
      <p>Ontdek wat Willemsen Bike Service voor jou en je fiets kan betekenen.</p>
      <div className="diensten-divider"></div>
    </div>

    <div className="diensten-grid">
      {/* 1️⃣ Fietsreparaties */}
      <div className="dienst-card animate-reveal">
        <img src="/images/reparaties.jpg" alt="Fietsreparaties" />
        <div className="dienst-card-body">
          <h3>Fietsreparaties</h3>
          <p>
            Snelle, vakkundige herstellingen voor elk type fiets — van racefiets tot
            e-bike. Altijd met originele onderdelen en transparante prijzen.
          </p>
          <a href="/fietsreparatie" className="btn">
            Bekijk prijslijst
          </a>
        </div>
      </div>

      {/* 2️⃣ Fietsonderhoud */}
      <div className="dienst-card animate-reveal">
        <img src="/images/onderhoud.jpg" alt="Fietsonderhoud" />
        <div className="dienst-card-body">
          <h3>Fietsonderhoud</h3>
          <p>
            Van kleine beurt tot volledige revisie — wij zorgen dat jouw fiets soepel,
            stil en betrouwbaar blijft rijden.
          </p>
          <a href="/onderhoud" className="btn">
            Plan onderhoud
          </a>
        </div>
      </div>

      {/* 3️⃣ Projecten & maatwerk */}
      <div className="dienst-card animate-reveal">
        <img src="/images/projecten.jpg" alt="Projecten & maatwerk" />
        <div className="dienst-card-body">
          <h3>Projecten & maatwerk</h3>
          <p>
            Bekijk onze recente projecten, maatwerk-oplossingen en unieke WBS-builds.
            Klik op een project voor meer foto’s en details.
          </p>
          <a href="/projecten" className="btn">
            Bekijk projecten
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* OVER ONS */}
      <section id="overons" className="about animate-reveal">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Over Ons</h2>
            <p>
              Fietsen is meer dan alleen een manier om van A naar B te gaan — het is vrijheid,
              snelheid en puur plezier. Bij <strong>Willemsen Bike Service</strong> delen we diezelfde passie
              voor de fiets.
            </p>
            <p>
              Wat begon als een hobby groeide uit tot een werkplaats waar kwaliteit, zorg en liefde
              voor het vak centraal staan. Elke fiets die binnenkomt, behandelen we alsof het onze
              eigen is — met oog voor detail en respect voor het materiaal.
            </p>
            <p>
              Of het nu gaat om een racefiets, mountainbike of stadsfiets: wij zorgen dat je fiets
              weer soepel rijdt en jij met een glimlach vertrekt.
            </p>
            <p style={{ fontWeight: "700", marginTop: "10px", color: "var(--blue)" }}>
              🚲 Passie voor fietsen. Aandacht voor elk detail.
            </p>
          </div>
          <div className="about-image">
            <img src="/images/about.jpg" loading="lazy" alt="Over ons" />
          </div>
        </div>
      </section>

      {/* AFSPRAAK */}
      <section id="afspraak" className="contact animate-reveal">
        <div className="container">
          <form ref={formRef} onSubmit={sendEmail} className="form">
            <div className="form-title">
              <h2>Plan je service-afspraak</h2>
              <p>Breng je fiets weer in topvorm — wij zorgen dat alles rijdt als nieuw, op het moment dat jou past.</p>
              <div className="form-divider"></div>
            </div>

            <input name="name" placeholder="Naam" required />
            <input name="email" type="email" placeholder="E-mail" required />
            <input name="phone" placeholder="Telefoonnummer" />
            <textarea name="message" rows="5" placeholder="Beschrijf het probleem"></textarea>

            <div className="form-date-time">
              <input
                name="date"
                type="date"
                required
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <select
                name="time"
                required
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Kies een tijd</option>
                {generateTimeSlots().map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            {/* 📎 Uploadveld (nog verborgen) */}
            <div style={{ display: "none" }}>
              <label htmlFor="file" style={{ fontWeight: 600 }}>
                Foto of video van het probleem (optioneel)
              </label>
              <input
                id="file"
                type="file"
                name="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
              />
            </div>

            <button type="submit" className="btn">Verstuur</button>
            {loading && <div className="loader-pulse"></div>}
          </form>
        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="success-popup">
          ✅ Service gepland! Wij nemen spoedig contact op.
        </div>
      )}
    </>
  );
}
