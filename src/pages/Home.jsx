import React from "react";
import DateTimeComponent from "../components/DateTimeComponent";
import NavDesktop from "../components/NavDesktop";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <DateTimeComponent />
      <NavDesktop />
      <Hero />
    </div>
  );
}

export default Home;
