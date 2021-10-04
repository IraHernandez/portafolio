import React from "react";
import "./Header.css";
import logo from "./img/logo.jpg"
 const Header = () => {
  return (
    <div>
      <header className="container justify-content-between  d-flex ">
        <div className="imglogo">
        </div>
        <nav>
          <ul className="d-flex align-items-center ">
            <li className="mr-3">Proyectos</li>
            <li className="mr-3">Habilidades y herramientas</li>
            <li className="">Contacto</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
