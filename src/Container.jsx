import React from 'react'
import Citas from './MostrarCitas'
import Formulario from './Formulario'
import './Container.css'


function Container() {
  return (
    <>
    <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Formulario />
          <Citas />
          </div>
      </div>
    </>      

  )
}   

export default Container