import React from 'react'
import Citas from './Citas'

function MostrarCitas({listaCitas, setListaCitas}) {

    localStorage.setItem("listaCitas", JSON.stringify(listaCitas)) 

  return (
    <div className="one-half column">
      <h1>ADMINISTRA TUS CITAS</h1>
      <Citas listaCitas = {listaCitas} setListaCitas = {setListaCitas}/>
    </div>  
  )
}

export default MostrarCitas