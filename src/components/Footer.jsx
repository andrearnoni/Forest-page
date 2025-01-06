import React from "react";
import forestLogo from "../img/forest.svg";

function Footer() {
  return (
    <footer className="container pb-8">
      <div className="grid gap-8 sm:grid-cols-2 bg-verde-900 mb-8 p-6 sm:p-12 rounded-2xl">
        <div className="flex gap-12 max-sm:flex-col max-sm:gap-4">
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Endereço</h3>
            <p className="text-gray-400">
              Rua da Mata, 123
              <br />
              Floresta Nacional
              <br />
              São Paulo, SP
            </p>
          </div>
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Contato</h3>
            <p className="text-gray-400">
              contato@forest.com
              <br />
              +55 (11) 99999-9999
            </p>
          </div>
        </div>
        <div className="lg:justify-self-end">
          <img className="mb-4" src={forestLogo} alt="Forest" />
          <p className="text-gray-400">Conecte-se com a natureza</p>
        </div>
      </div>
      <div className="text-gray-400 flex items-center justify-between gap-8 text-sm max-sm:flex-col-reverse">
        <p>© 2024 Forest. Todos os direitos reservados.</p>
        <ul className="flex gap-8">
          <li>
            <a className="hover:text-verde-300" href="#">
              Instagram
            </a>
          </li>
          <li>
            <a className="hover:text-verde-300" href="#">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="hover:text-verde-300" href="#">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
