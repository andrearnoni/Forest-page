import React from "react";
import DateTimeComponent from "../components/DateTimeComponent";
import NavDesktop from "../components/NavDesktop";
import Hero from "../components/Hero";
import AccommodationSection from "../components/AccommodationSection";

function Home() {
  return (
    <div>
      <DateTimeComponent />
      <NavDesktop />
      <Hero />
      <AccommodationSection />
    </div>
  );
}

export default Home;
