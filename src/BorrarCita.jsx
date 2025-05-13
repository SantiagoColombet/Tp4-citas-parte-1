import React from 'react'
import './BorrarCita.css';

function BorrarCita({id, setListaCitas}) 
{
  const borrar = () => {
    setListaCitas((prevCitas) => prevCitas.filter(cita => cita.id !== id));
  }
  return (
    <button className="button eliminar u-full-width" onClick={borrar}>
        Eliminar x
    </button>
  )
}

export default BorrarCita