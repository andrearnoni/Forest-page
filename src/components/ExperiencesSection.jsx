import React from "react";
import canoagem from "../img/canoagem.jpg";
import vidaSelvagem from "../img/vida-selvagem.jpg";
import observacaoNoturna from "../img/observacao-noturna.jpg";

function ExperiencesSection() {
  return (
    <section
      id="experiencias"
      className="container mb-12 sm:mb-16 grid sm:grid-cols-2 gap-8"
    >
      <div className="bg-verde-900 p-6 sm:p-8 rounded-xl">
        <p className="uppercase mb-4 text-verde-200 tracking-widest text-sm">
          Experiências Exclusivas
        </p>
        <h2 className="mb-8 text-balance text-white text-3xl sm:text-4xl lg:text-5xl font-serif">
          Escolha Sua Próxima Aventura
        </h2>
        <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 hover:before:w-10 before:transition-all">
          Observação Noturna
        </h3>
        <p className="mb-8 text-balance text-gray-400 pl-10">
          Explore a vida selvagem em seu habitat natural sob as estrelas.
        </p>
        <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 hover:before:w-10 before:transition-all">
          Vida Selvagem
        </h3>
        <p className="mb-8 text-balance text-gray-400 pl-10">
          Observe a vida selvagem em seu habitat natural.
        </p>
        <h3 className="text-white text-xl flex items-center gap-4 before:h-0.5 before:w-6 before:bg-verde-400 hover:before:w-10 before:transition-all">
          Canoagem
        </h3>
        <p className="mb-8 text-balance text-gray-400 pl-10">
          Conquiste novos horizontes com a nossa equipe especializada.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className=" group relative cursor-pointer overflow-hidden rounded-xl">
          <img
            className="size-full object-cover transition-transform group-hover:scale-110"
            src={canoagem}
            alt="canoagem"
          />
          <div className="absolute flex p-4 items-end inset-0 bg-gradient-to-t from-verde-950/80 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-white">Canoagem</span>
          </div>
        </div>
        <div className=" group relative cursor-pointer overflow-hidden rounded-xl row-span-2">
          <img
            className="size-full object-cover transition-transform group-hover:scale-110"
            src={observacaoNoturna}
            alt="observacao noturna"
          />
          <div className="absolute flex p-4 items-end inset-0 bg-gradient-to-t from-verde-950/80 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-white">Observação Noturna</span>
          </div>
        </div>
        <div className=" group relative cursor-pointer overflow-hidden rounded-xl">
          <img
            className="size-full object-cover transition-transform group-hover:scale-110"
            src={vidaSelvagem}
            alt="vida selvagem"
          />
          <div className="absolute flex p-4 items-end inset-0 bg-gradient-to-t from-verde-950/80 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-white">Vida Selvagem</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencesSection;
