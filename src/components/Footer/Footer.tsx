import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-800 py-4 md:h-[10vh]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-center md:text-left mb-3 md:mb-0 h-full">
          <p>© 2023 Mi Sitio Web</p>
        </div>

        <div className="text-white text-center md:text-right h-full">
          <a
            href="#"
            className="block md:inline mx-2 mb-2 md:mb-0 hover:text-gray-400"
          >
            Inicio
          </a>
          <a
            href="#"
            className="block md:inline mx-2 mb-2 md:mb-0 hover:text-gray-400"
          >
            Acerca de
          </a>
          <a
            href="#"
            className="block md:inline mx-2 mb-2 md:mb-0 hover:text-gray-400"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
