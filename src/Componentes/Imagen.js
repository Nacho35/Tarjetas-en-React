import React from "react";

const Imagen = (props) => {
  return (
    <div className="img">
      <img src={props.imgcard} alt={props.desc}></img>
    </div>
  );
};

export default Imagen;
