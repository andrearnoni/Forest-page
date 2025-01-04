import React from "react";
import amanhecer from "../img/manha.svg";
import meioDia from "../img/dia.svg";
import anoitecer from "../img/noite.svg";

function CycleSection() {
  return (
    <section className="container bg-[url('./img/padrao.svg')] bg-contain bg-center bg-no-repeat mb-12 sm:mb-16 sm:py-16">
      <p className="uppercase mb-4 text-verde-200 text-center tracking-widest text-sm">
        Ciclo Natural
      </p>
      <h2 className="mb-8 mx-auto text-balance text-center max-w-screen-md text-white text-4xl sm:text-6xl font-serif">
        Ritmo da Floresta
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="grid gap-4 flex-1 bg-verde-900 p-6 sm:p-8 rounded-xl sm:hover:-translate-y-2 transition-transform">
          <div className="bg-verde-400 size-10 flex items-center justify-center rounded-full">
            <img src={amanhecer} alt="" />
          </div>
          <h3 className="font-serif text-white text-2xl">Amanhecer</h3>
          <p className="text-gray-400">
            Desperte com o canto dos pássaros e participe das nossas caminhadas
            ao ar livre.
          </p>
          <span className="text-verde-300">05:30 - 07:00</span>
        </div>
        <div className="grid gap-4 flex-1 bg-verde-900 p-6 sm:p-8 rounded-xl sm:translate-y-12 sm:hover:translate-y-10 transition-transform">
          <div className="bg-verde-400 size-10 flex items-center justify-center rounded-full">
            <img src={meioDia} alt="" />
          </div>
          <h3 className="font-serif text-white text-2xl">Meio-dia</h3>
          <p className="text-gray-400">
            Explore nossas trilhas sombreadas e desfrute de um piquenique
            gourmet na natureza.
          </p>
          <span className="text-verde-300">12:00 - 14:00</span>
        </div>
        <div className="grid gap-4 flex-1 bg-verde-900 p-6 sm:p-8 rounded-xl sm:hover:-translate-y-2 transition-transform">
          <div className="bg-verde-400 size-10 flex items-center justify-center rounded-full">
            <img src={anoitecer} alt="" />
          </div>
          <h3 className="font-serif text-white text-2xl">Anoitecer</h3>
          <p className="text-gray-400">
            Termine seu dia com nossa sessão de observação de estrelas.
          </p>
          <span className="text-verde-300">19:00 - 21:00</span>
        </div>
      </div>
    </section>
  );
}

export default CycleSection;
