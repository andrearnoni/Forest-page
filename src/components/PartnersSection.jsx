import React from "react";
import caravan from "../img/parceiros/caravan.svg";
import dogs from "../img/parceiros/dogs.svg";
import wildbeast from "../img/parceiros/wildbeast.svg";
import lescone from "../img/parceiros/lescone.svg";
import surfbot from "../img/parceiros/surfbot.svg";

function PartnersSection() {
  return (
    <section className="container mb-12 sm:mb-16">
      <ul className="flex flex-col sm:flex-row sm:gap-8 items-center py-4 max-sm:divide-y-2 divide-verde-900 *:p-4 *:*:max-h-8 sm:border-b-2 sm:border-t-2 sm:py-8 sm:border-verde-900 sm:justify-center">
        <li>
          <img src={caravan} alt="Caravan" />
        </li>
        <li>
          <img src={dogs} alt="Dogs" />
        </li>
        <li>
          <img src={wildbeast} alt="Wildbeast" />
        </li>
        <li>
          <img src={lescone} alt="Lescone" />
        </li>
        <li>
          <img src={surfbot} alt="Surfbot" />
        </li>
      </ul>
    </section>
  );
}

export default PartnersSection;
