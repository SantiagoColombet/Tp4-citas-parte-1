import React from 'react';
import BotonNuevaCita from './BotonNuevaCita';
import Citas from './Citas';
import InputCita from './InputCita';

function CrearCita() {

    
  return (
    <>
    <form>
        <InputCita />
        <BotonNuevaCita />
    </form>
    </>
  );
}

export default CrearCita;
