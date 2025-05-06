import React from 'react'

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
              <button className="button eliminar u-full-width">
                Eliminar x
              </button>
            </div>
          ))}
        </>
      );
}

export default Citas