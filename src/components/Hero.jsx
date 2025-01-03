import React from "react";
import forestHero from "../img/floresta.jpg";
import wildbeast from "../img/parceiros/wildbeast.svg";

function Hero() {
  return (
    <main className="container">
      <div className="relative px-8 pb-8 pt-64 max-sm:pt-12 max-sm:px-4 bg-gradient-to-t from-verde-950/80 text-white rounded-2xl overflow-hidden">
        <img
          className="absolute inset-0 -z-10 size-full object-cover"
          src={forestHero}
          alt="floresta"
        />
        <div className="bg-verde-950 max-sm:bg-verde-950/60 inline-flex max-sm:flex max-sm:flex-col max-sm:gap-2 mb-8 gap-8 items-center max-sm:items-start py-1 pl-4 pr-1 max-sm:p-4 rounded-full max-sm:rounded-xl">
          vagas para dezembro abertas
          <a
            className="bg-verde-400 text-verde-900 py-2 px-4 inline-block rounded-full"
            href=""
          >
            Reserve Hoje
          </a>
        </div>
        <h1 className="font-serif text-balance mb-20 max-sm:mb-8 max-w-screen-sm text-5xl max-sm:text-4xl">
          Venha Experimentar a Vida na Floresta
        </h1>
        <div className="sm:flex justify-between items-end text-sm">
          <p className="max-sm:mb-4">
            Melhores locais para visitar{" "}
            <a
              className="underline decoration-2 underline-offset-4 hover:no-underline"
              href="./"
            >
              2028
            </a>
          </p>
          <div>
            <p className="uppercase mb-2">Recomendado por</p>
            <p className="flex items-center gap-4">
              <img className="w-28" src={wildbeast} alt="wildbeast" />
              <span>|</span>
              Revista Nacional
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
