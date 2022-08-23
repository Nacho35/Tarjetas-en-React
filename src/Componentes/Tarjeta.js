import React from "react";
import Boton from "./Boton";
import Imagen from "./Imagen";
import Texto from "./Texto";

const Tarjeta = (props) => {
  return (
    <figure className="card">
      <figcaption>
        <Imagen imgcard={props.imgcard} />
        <Texto title={props.title} text={props.text} />
        <Boton />
      </figcaption>
    </figure>
  );
};

export default Tarjeta;
