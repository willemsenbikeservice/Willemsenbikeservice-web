import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

export default function Home() {
  const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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

  // E-mails versturen (klant + eigenaar)
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // 1️⃣ Stuur bevestiging naar klant
    emailjs
      .sendForm("service_9n4vqny", "template_9vynnxj", formRef.current, "qPKid3V17nWCtS_NJ")
      .then(() => {
        console.log("✅ Klantbevestiging verzonden.");

        // 2️⃣ Stuur melding naar Willemsen Bike Service
        return emailjs.sendForm(
          "service_9n4vqny",
          "template_g27566l",
          formRef.current,
          "qPKid3V17nWCtS_NJ"
        );
      })
      .then(() => {
        console.log("📩 Interne melding verzonden.");
        setLoading(false);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);
        formRef.current.reset();
        setSelectedDate("");
        setSelectedTime("");
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
          <h2 className="animate-reveal">Onze Diensten</h2>
          <div className="grid">
            <div className="card animate-reveal">
              <Link to="/fietsreparatie">
                <img src="/images/service1.jpg" loading="lazy" alt="Fietsreparatie" />
              </Link>
              <div className="card-body">
                <h3>Fietsreparatie</h3>
                <p>Snel en vakkundig alle fietsproblemen verholpen.</p>
                <Link to="/fietsreparatie" className="btn" style={{ marginTop: 8 }}>Meer info</Link>
              </div>
            </div>
            <div className="card animate-reveal">
              <Link to="/onderhoud">
                <img src="/images/service2.jpg" loading="lazy" alt="Onderhoud" />
              </Link>
              <div className="card-body">
                <h3>Onderhoud</h3>
                <p>Voorkom pech met professioneel onderhoud.</p>
                <Link to="/onderhoud" className="btn" style={{ marginTop: 8 }}>Meer info</Link>
              </div>
            </div>
            <div className="card animate-reveal">
              <Link to="/tweedehands">
                <img src="/images/service3.jpg" loading="lazy" alt="Tweedehands fietsen" />
              </Link>
              <div className="card-body">
                <h3>Tweedehands Fietsen</h3>
                <p>Kwaliteit en rijklaar — binnenkort beschikbaar.</p>
                <Link to="/tweedehands" className="btn" style={{ marginTop: 8 }}>Meer info</Link>
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
          <h2>Plan een Afspraak</h2>
          <form ref={formRef} onSubmit={sendEmail} className="form">
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

            <button type="submit" className="btn">Verstuur</button>
            {loading && <div className="loader-pulse"></div>}
          </form>
        </div>
      </section>

      {/* POPUP */}
      {showPopup && <div className="success-popup">✅ Service gepland! Wij nemen spoedig contact op.</div>}
    </>
  );
}
