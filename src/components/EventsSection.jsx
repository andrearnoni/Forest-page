import React from "react";

function EventsSection() {
  return (
    <section
      id="eventos"
      className="mb-12 sm:mb-16 py-12 sm:py-16 bg-verde-900"
    >
      <div className="container">
        <p className="uppercase mb-4 text-verde-200 text-center tracking-widest text-sm">
          Conecte-se com a natureza
        </p>
        <h2 className="mb-8 mx-auto text-balance text-center max-w-screen-md text-white text-4xl sm:text-6xl font-serif">
          Cada Som, Cada Momento, Uma Nova Descoberta
        </h2>
        <div className="overflow-x-auto snap-x snap-mandatory pb-4 grid grid-cols-[repeat(3,minmax(300px,1fr))] gap-4 sm:gap-8">
          <div className="grid snap-center gap-4 bg-verde-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-verde-300 text-2xl font-serif">Lua Nova</h3>
            <div className="text-white">
              <p className="font-serif text-5xl">23</p>
              <p className="text-xl">Março 2028</p>
            </div>
            <p className="text-gray-300 text-balance">
              Melhor período para observação astronômica. O céu estará claro e
              as estrelas visíveis.
            </p>
            <a className="btn justify-self-start self-end" href="#contato">
              Reservar 23/03
            </a>
          </div>
          <div className="grid snap-center gap-4 bg-verde-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-verde-300 text-2xl font-serif">
              Aurora Boreal
            </h3>
            <div className="text-white">
              <p className="font-serif text-5xl">15</p>
              <p className="text-xl">Abril 2028</p>
            </div>
            <p className="text-gray-300 text-balance">
              Melhor período para observação da aurora boreal, o céu estará
              iluminado pelas estrelas.
            </p>
            <a className="btn justify-self-start self-end" href="#contato">
              Reservar 15/04
            </a>
          </div>
          <div className="grid snap-center gap-4 bg-verde-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-verde-300 text-2xl font-serif">
              Chuva de Meteóros
            </h3>
            <div className="text-white">
              <p className="font-serif text-5xl">18</p>
              <p className="text-xl">Agosto 2028</p>
            </div>
            <p className="text-gray-300 text-balance">
              Melhor período para observação da chuva de meteóros, o céu estará
              iluminado pelas estrelas.
            </p>
            <a className="btn justify-self-start self-end" href="#contato">
              Reservar 18/08
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
