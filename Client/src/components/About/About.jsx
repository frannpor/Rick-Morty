import myImage from "./Edited.jpg"; // import the image file
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="text-container">
        <h1>Este es mi perfil</h1>
        <h2>Francisco Porciel</h2>
        <div className="image-container">
          <img src={myImage} alt="francisco-porciel" />
        </div>
        <h3>Acerca de mi</h3>
        <p>
          Aquí es donde escribiré una breve descripcion de quien soy, pondré
          varias cuestiones tales como mi edad, donde vivo, que hago para vivir,
          por qué me apasiona estudiar programación, qué fue lo que me decantó a
          estudiar esto, cual es mi aspiración a futuro y en que rama me quiero
          desarrollar en profundidad, si es que tengo un proyecto/plan de vida
          de acá a unos años, como es que hice toda esta aplicación. Entre otros
          tipos de cosas tambien trataré de ahondar mas en lo personal.
        </p>
      </div>
    </div>
  );
};
export default About;
