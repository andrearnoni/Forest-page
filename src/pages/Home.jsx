import React from "react";
import DateTimeComponent from "../components/DateTimeComponent";
import NavComponent from "../components/NavComponent";
import Hero from "../components/Hero";
import AccommodationSection from "../components/AccommodationSection";
import EventsSection from "../components/EventsSection";
import ExperiencesSection from "../components/ExperiencesSection";
import CycleSection from "../components/CycleSection";
import ContactSection from "../components/ContactSection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <DateTimeComponent />
      <NavComponent />
      <Hero />
      <AccommodationSection />
      <EventsSection />
      <ExperiencesSection />
      <CycleSection />
      <ContactSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default Home;
