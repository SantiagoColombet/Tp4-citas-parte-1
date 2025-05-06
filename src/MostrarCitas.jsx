import React from 'react'
import Citas from './Citas'

function MostrarCitas() {
  const citas = [
    {
      mascota: "Nina",
      propietario: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      mascota: "Sifon",
      propietario: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      mascota: "Floki",
      propietario: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ];
  return (
    <div class="one-half column">
      <h1>ADMINISTRA TUS CITAS</h1>
      <Citas citas={citas}/>
    </div>  
  )
}

export default MostrarCitas