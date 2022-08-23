import React from "react";
import Tarjeta from "./Tarjeta.js";

const ListaTarjetas = () => {
  return (
    <section>
      <h2>Turismo</h2>
      <div className="container">
        <Tarjeta
          imgcard={require("../Assets/santorini.jpg")}
          title="Grecia"
          text="Santorini es una de las islas Cícladas en el mar Egeo. Fue devastada por una erupción volcánica en el siglo XVI a. C., que dio forma a su paisaje accidentado. Las casas cúbicas encaladas en sus 2 ciudades principales, Fira y Oia, se aferran a los acantilados sobre un cráter subterráneo. Estas tienen vista al mar, las pequeñas islas al oeste y las playas de piedras de lava blancas, rojas y negras."
        />
        <Tarjeta
          imgcard={require("../Assets/españa.jpg")}
          title="España"
          text="Córdoba es una ciudad del sur de la región de Andalucía, en España, y es la capital de la provincia de Córdoba. Fue una importante ciudad romana y uno de los principales centros islámicos de la Edad Media. Es conocida por la enorme Mezquita que data del año 784 d. C., con un salón de oración con columnas y antiguos mosaicos bizantinos. Después de convertirse en una iglesia católica en 1236, se agregó una nave de estilo renacentista en el siglo XVII."
        />
        <Tarjeta
          imgcard={require("../Assets/italia.jpg")}
          title="Italia"
          text="Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano. La ciudad del Vaticano, sede central de la Iglesia católica romana, cuenta con la Basílica de San Pedro y los Museos del Vaticano, que albergan obras maestras como los frescos de la Capilla Sixtina de Miguel Ángel."
        />
        <Tarjeta
          imgcard={require("../Assets/japon.jpg")}
          title="Japon"
          text="Osaka es una gran ciudad portuaria y un centro comercial en la isla de Honshu de Japón. Es famosa por su moderna arquitectura, su vida nocturna y la abundante comida callejera. El castillo de Osaka del shogunato del siglo XVI, que ha sido restaurado varias veces, es un importante monumento histórico. Está rodeado de un foso y un parque con árboles de ciruelo, durazno y cerezo en flor. Sumiyoshi-taisha se encuentra entre los templos shinto más antiguos de Japón."
        />
        <Tarjeta
          imgcard={require("../Assets/praga.jpg")}
          title="República Checa"
          text="Praga, la capital de la República Checa, está dividida por el río Moldava. Recibe el apodo de la “Ciudad de las Cien Torres” y es conocida por la Plaza de la Ciudad Vieja, el núcleo de su centro histórico, con coloridos edificios barrocos, iglesias góticas y el Reloj Astronómico medieval, que muestra un espectáculo animado cada hora. El puente peatonal de Carlos se completó en 1402 y está bordeado de estatuas de santos católicos."
        />
        <Tarjeta
          imgcard={require("../Assets/suecia.jpg")}
          title="Suecia"
          text="Uppsala es una ciudad cercana a Estocolmo, en Suecia, famosa por la Universidad de Uppsala, que se fundó en el siglo XV. El edificio universitario original, Gustavianum, es ahora un museo que alberga el Augsburg Art Cabinet, un ornamentado gabinete con curiosidades del siglo XVII. Cerca, la biblioteca de Carolina Rediviva expone la Biblia de Plata, del siglo VI. La catedral de Uppsala es el lugar donde se entierra a los reyes suecos, como el rey Gustavo Vasa."
        />
      </div>
    </section>
  );
};

export default ListaTarjetas;
