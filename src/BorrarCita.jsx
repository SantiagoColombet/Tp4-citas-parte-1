import React from 'react'
import './BorrarCita.css';

function BorrarCita({id, setListaCitas, listaCitas}) 
{
  const borrar = () => {
    setListaCitas((listaCitas) => listaCitas.filter(cita => cita.id !== id));

      localStorage.setItem("listaCitas", JSON.stringify(listaCitas)) 
    
  }
  return (
    <button className="button eliminar u-full-width" onClick={borrar}>
        Eliminar x
    </button>
  )
}

export default BorrarCita