import React from "react";
import profile from "../img/profile.png"
import cv from "../img/cv-ale.pdf"
import "./Hero.css";
import "../style.css"

 const Hero = () => {
  return (
    <div className="container hero mb-5">
      <div className="row">
        <div className="col col-sm-12 col-lg-6 col-12 d-flex flex-column justify-content-center columna">
          <h1>¡Hola! 👋🏼 Soy Iraicy Alejandra, Front end developer</h1>
          <p>
            Soy una persona curiosa, inclinada a aprender lo que aún no
            conozco y ver que está en tendencia, le doy importancia hasta
            a los detalles más pequeños.Me apasiona poder crear productos
            digitales que resuelvan las necesidades y problemas reales de
            cientos de usuario.
          </p>
          < div className="containerButton">
            <a href={cv} className="btn btn-dark button" download>
              Descargar Curriculum
            </a>
            <a  href="https://github.com/IraHernandez" target="_blank" className="btn btn-dark icon-github mt-2 button">
              Ir a Github
            </a>
          </div>
        </div>
        <div className="col col-sm-12 col-lg-6 col-12 columna columImage">
          <img src={profile} alt="profile.Ira" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
