import React from "react";
import profile from "../img/profile.png"
import cv from "../img/cv-ale.pdf"
import "./Hero.css";

 const Hero = () => {
  return (
    <div className="container hero mb-5">
      <div className="row">
        <div className="col d-flex flex-column justify-content-center columna">
          <h1>¡Hola! 👋🏼 Soy Iraicy Alejandra, Front end developer</h1>
          <p>
            Soy una persona curiosa, inclinada a aprender lo que aún no
            conozco y ver que está en tendencia, le doy importancia hasta
            a los detalles más pequeños.Me apasiona poder crear productos
            digitales que resuelvan las necesidades y problemas reales de
            cientos de usuario.
          </p>
          < div className="containerButton">
            <a href={cv} className="btn btn-dark" download>
              Descargar Curriculum
            </a>
          </div>
        </div>
        <div className="col columna columImage">
          <img src={profile} alt="profile.Ira" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
