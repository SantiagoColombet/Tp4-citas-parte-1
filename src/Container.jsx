import React, { useEffect } from "react";
import Citas from "./MostrarCitas";
import Formulario from "./Formulario";
import { useState } from "react";
import "./Container.css";

function Container() {
  const [contador, setContador] = useState(0);
  const [listaCitas, setListaCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem('listaCitas')
    return citasGuardadas != null ? JSON.parse(localStorage.getItem("listaCitas")) : []
  });

  useEffect(() => {
    localStorage.setItem('listaCitas', JSON.stringify(listaCitas))
  }, [listaCitas]);

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
