import React from 'react'
import './Citas.css';
import BorrarCita from './BorrarCita';


function Citas({citas}) {
    return (
        <>
          {citas?.map((cita, index) => (
            <div className="cita" key={index}>
              <p>Mascota: <span>{cita.mascota}</span></p>
              <p>Dueño: <span>{cita.propietario}</span></p>
              <p>Fecha: <span>{cita.fecha}</span></p>
              <p>Hora: <span>{cita.hora}</span></p>
              <p>Síntomas: <span>{cita.sintomas}</span></p>
              <BorrarCita />
            </div>
          ))}
        </>
      );
}

export default Citas