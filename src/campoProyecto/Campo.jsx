import React from 'react'
import image from "../img/p.d.p.jpg"
import "./Campo.css"

const Campo = ({ title, page, imagePort, messagebutton}) => {
  return (
    <div>
       <section className="container mt-4 fieldProyect">
        <div className="row ">
          <div className="col  d-flex flex-column align-items-center justify-content-center">
            <h3>{title}</h3>
            <p>
              People Development Platform, un sitio web responsive que le permitirá
              a nuestros colaboradores independientemente de sus condiciones interactuar, mapear
              y planear su carrera dentro la compañía.
            </p>
            <button className="btn btn-dark">
              <a className="white" href={page} target="_blank">
              {messagebutton}
              </a>
            </button>
          </div>
          <div className="col columnaProyect ">
            <img src={imagePort} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}
export default Campo;