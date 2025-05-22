import React, { useEffect, useState } from "react";
import Citas from "./MostrarCitas";
import Formulario from "./Formulario";
import "./Container.css";

function Container() {
  const [listaCitas, setListaCitas] = useState([]);
  const [contador, setContador] = useState(0);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const citasGuardadas  = localStorage.getItem("listaCitas");
    const contadorGuardado = localStorage.getItem("contador");
    if (citasGuardadas) {
      setListaCitas(JSON.parse(citasGuardadas));
    }
    if (contadorGuardado) {
      setContador(JSON.parse(contadorGuardado));
    }
    setCargado(true);
  }, []);
  useEffect(() => {
    if (cargado){
      localStorage.setItem("listaCitas", JSON.stringify(listaCitas));
      localStorage.setItem("contador", JSON.stringify(contador));
    }  
  }, [listaCitas, contador, cargado]);

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Formulario
            setContador={setContador}
            contador={contador}
            listaCitas={listaCitas}
            setListaCitas={setListaCitas}
          />
          <Citas listaCitas={listaCitas} setListaCitas={setListaCitas} />
        </div>
      </div>
    </>
  );
}

export default Container;
