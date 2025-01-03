import React from "react";
import casa1 from "../img/casa1.jpg";
import casa2 from "../img/casa2.jpg";
import casa3 from "../img/casa3.jpg";

function AccommodationSection() {
  return (
    //Código escrito em mobile first
    <section
      id="acomodacoes"
      className="container grid lg:grid-cols-[2fr_3fr] gap-8 pt-16 mb-12 sm:mb-16"
    >
      <div className="content-end bg-[url('./img/padrao.svg')] bg-no-repeat bg-contain bg-left-bottom">
        <h2 className="text-white mb-8 text-4xl font-serif lg:text-5xl">
          Refúgio Natural
        </h2>
        <ul className="text-gray-200 *:flex *:items-center *:gap-4 space-y-4 sm:text-xl">
          <li>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
            Experimente a natureza de perto
          </li>
          <li>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
            Conecte-se com a natureza
          </li>
          <li>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
            Desconecte-se do digital
          </li>
          <li>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>Observe
            a vida selvagem
          </li>
          <li>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>Escolha
            a sua cabine preferida
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-4 sm:gap-8">
        <div className="col-span-full relative">
          <img
            className="h-52 w-full object-cover rounded-xl"
            src={casa1}
            alt="casa 1"
          />
          <span className="uppercase text-sm/none text-white rounded-full bg-verde-950/60 px-4 py-2 absolute top-2 right-2">
            Ruby
          </span>
        </div>
        <div className="relative">
          <img
            className="size-full object-cover rounded-xl"
            src={casa2}
            alt="casa 2"
          />
          <span className="uppercase text-sm/none text-white rounded-full bg-verde-950/60 px-4 py-2 absolute top-2 right-2">
            Emerald
          </span>
        </div>
        <div className="relative">
          <img
            className="size-full object-cover rounded-xl"
            src={casa3}
            alt="casa 3"
          />
          <span className="uppercase text-sm/none text-white rounded-full bg-verde-950/60 px-4 py-2 absolute top-2 right-2">
            Saphire
          </span>
        </div>
      </div>
    </section>
  );
}

export default AccommodationSection;
