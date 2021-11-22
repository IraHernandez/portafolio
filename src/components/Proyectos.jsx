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
          page="https://hungry-minsky-892ecf.netlify.app/"
          imagePort={pdp}
          messagebutton="ver en la web"
        />
        <Campo
          title="Card validation"
          page="https://github.com/IraHernandez/BOG002-card-validation"
          imagePort={card}
          messagebutton="ver código"
        />
        <Campo
          title="Ricky and Morty"
          page="https://nataliagaravito.github.io/BOG002-data-lovers/"
          imagePort={ricky}
          messagebutton="ver en la web"

        />
      </div>

  )
}

export default Proyectos;