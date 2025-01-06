import React from "react";
import forestLogo from "../img/forest.svg";

function NavComponent() {
  return (
    <header className="container flex items-center justify-between gap-8 py-8">
      <a href="./">
        <img src={forestLogo} alt="Forest" />
      </a>
      <nav
        id="mobile-menu"
        onClick={() => {
          document.getElementById("mobile-menu").classList.add("hidden") ||
            document.getElementById("mobile-menu").classList.remove("flex");
        }}
        className="hidden lg:block items-center z-40 max-lg:fixed max-lg:w-full max-lg:inset-0"
      >
        <div className="fixed lg:hidden inset-0 bg-verde-950/40 backdrop-blur-md"></div>
        <ul className="max-lg:absolute max-lg:p-8 max-lg:w-full max-lg:divide-y-2 max-lg:divide-white/10 text-white text-2xl lg:text-xl lg:flex lg:flex-wrap lg:gap-8 max-lg:z-50">
          <li className="animate-slide-in opacity-0 animate-1">
            <a
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 lg:hover:underline lg:hover:underline-offset-8"
              href="#acomodacoes"
            >
              Acomodações
            </a>
          </li>
          <li className="animate-slide-in opacity-0 animate-2">
            <a
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 lg:hover:underline lg:hover:underline-offset-8"
              href="#eventos"
            >
              Eventos
            </a>
          </li>
          <li className="animate-slide-in opacity-0 animate-3">
            <a
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 lg:hover:underline lg:hover:underline-offset-8"
              href="#experiencias"
            >
              Experiências
            </a>
          </li>
          <li className="animate-slide-in opacity-0 animate-4">
            <a
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 lg:hover:underline lg:hover:underline-offset-8"
              href="#contato"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <button
        id="mobile-button"
        onClick={() => {
          document.getElementById("mobile-menu").classList.toggle("hidden") ||
            document.getElementById("mobile-menu").classList.toggle("flex");
        }}
        className="btn flex items-center gap-3 text-verde-900 py-1 rounded-full lg:hidden"
      >
        Menu
        <span className="h-3 w-4 flex flex-col justify-between *:h-0.5 *:rounded-md *:bg-verde-800">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </header>
  );
}

export default NavComponent;
