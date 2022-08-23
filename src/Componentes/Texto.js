import React from "react";

const Texto = (props) => {
  return (
    <div className="texto-tarjeta">
      <h1 className="titulo">{props.title}</h1>
      <p className="parrafo">{props.text}</p>
    </div>
  );
};

export default Texto;
