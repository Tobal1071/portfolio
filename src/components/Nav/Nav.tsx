import React from "react";

function Nav() {
  return (
    <div className="hidden fixed top-28 left-28 w-full py-4 xl:flex align-middle justify-between">
      <ul className="flex flex-col gap-4">
        <li>
          <a className="cursor-pointer" href="#inicio">
            Inicio
          </a>
        </li>
        <li>
          <a className="cursor-pointer" href="#perfil">
            Perfil
          </a>
        </li>
        <li>
          <a className="cursor-pointer" href="#estudios">
            Estudios
          </a>
        </li>
        <li>
          <a className="cursor-pointer" href="#habilidades">
            Skills
          </a>
        </li>
        <li>
          <a className="cursor-pointer" href="#experiencia">
            Experiencia
          </a>
        </li>
        <li>
          <a className="cursor-pointer" href="#idiomas">
            Idiomas
          </a>
        </li>
        <li>
          <a className="cursor-pointer" href="#proyectos">
            Proyectos
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
