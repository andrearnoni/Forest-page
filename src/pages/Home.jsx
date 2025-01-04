import React from "react";
import DateTimeComponent from "../components/DateTimeComponent";
import NavDesktop from "../components/NavDesktop";
import Hero from "../components/Hero";
import AccommodationSection from "../components/AccommodationSection";
import EventsSection from "../components/EventsSection";
import ExperiencesSection from "../components/ExperiencesSection";
import CycleSection from "../components/CycleSection";

function Home() {
  return (
    <div>
      <DateTimeComponent />
      <NavDesktop />
      <Hero />
      <AccommodationSection />
      <EventsSection />
      <ExperiencesSection />
      <CycleSection />
    </div>
  );
}

export default Home;
