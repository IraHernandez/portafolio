import React from 'react'
import "./Proyectos.css"
import Campo from "../campoProyecto/Campo"
import pdp from "../img/p.d.p.jpg"
import card from "../img/card.png"
import ricky from "../img/ricky.png"

const Proyectos = () => {
  return (
      <div class="container proyectos">
        <h2 className="mt-5">Proyectos</h2>

        <Campo
          title="People Development Platform"
          page=""
          imagePort={pdp}
        />
        <Campo
          title="Card validation"
          page="https://www.google.com"
          imagePort={card}
        />
        <Campo
          title="Ricky and Morty"
          page="https://www.facebook.com"
          imagePort={ricky}
        />
      </div>

  )
}

export default Proyectos;