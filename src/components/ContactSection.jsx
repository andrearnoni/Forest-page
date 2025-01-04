import React from "react";

function ContactSection() {
  return (
    <section
      id="contato"
      className="container mb-12 sm:mb-16 grid lg:grid-cols-2 gap-8"
    >
      <div>
        <h1 className="font-serif text-4xl text-verde-300 mb-4">
          Nossos Contatos
        </h1>
        <p className="text-gray-200 text-balance mb-8">
          Tem interesse em passar uma temporada na Forest? Entre em contato com
          a gente por telefone ou email.
        </p>
        <div className="grid gap-4">
          <div>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
            <h2 className="mb-2 text-2xl text-verde-300 font-serif">Base</h2>
            <p className="text-gray-300">
              Rua da Mata, 123 - Floresta Nacional - SP
            </p>
          </div>
          <div>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
            <h2 className="mb-2 text-2xl text-verde-300 font-serif">Email</h2>
            <p className="text-gray-300">contato@forest.com</p>
          </div>
          <div>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
            <h2 className="mb-2 text-2xl text-verde-300 font-serif">
              Telefone
            </h2>
            <p className="text-gray-300">11 99999-9999</p>
          </div>
        </div>
      </div>
      <form
        className="grid gap-4 rounded-xl bg-verde-900 shadow-2xl p-4 lg:p-8"
        action=""
      >
        <div className="grid gap-1">
          <label className="text-white" htmlFor="nome">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-verde-900 placeholder:text-verde-900"
            type="text"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1">
            <label className="text-white" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-verde-900 placeholder:text-verde-900"
              type="email"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-white" htmlFor="telefone">
              Telefone
            </label>
            <input
              id="telefone"
              name="telefone"
              className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-verde-900 placeholder:text-verde-900"
              placeholder="(11) 00000-0000"
              type="text"
            />
          </div>
        </div>
        <div className="grid gap-1">
          <label className="text-white" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            className="rounded-md border-2 border-verde-800 bg-verde-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-verde-400 focus:border-verde-900 placeholder:text-verde-900 resize-none"
            type="text"
          ></textarea>
        </div>
        <button className="place-self-start bg-verde-400 text-verde-900 py-2 px-4 inline-block rounded-full">
          Enviar Email
        </button>
      </form>
    </section>
  );
}

export default ContactSection;
