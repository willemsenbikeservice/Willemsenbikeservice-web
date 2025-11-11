import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Fietsreparatie from "./pages/Fietsreparatie";
import Onderhoud from "./pages/Onderhoud";
import Projecten from "./pages/Projecten";
import NotFound from "./pages/NotFound";

import useReveal from "./hooks/useReveal";



export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fietsreparatie" element={<Fietsreparatie />} />
          <Route path="/onderhoud" element={<Onderhoud />} />
          <Route path="/projecten" element={<Projecten />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
  
}
