import { Link } from "react-router-dom";
import "animate.css";

export const CharactersByHero = ({ alter_ego, characters }) => {
  //OPCION 1 DE COMPONENTE
  //Si el alter ego es igual al nombre del personaje entonces devuelve un fragmento vacio ya que no queremos que se repita el mismo nombre.
  //if (alter_ego === characters) return <></>;

  //Si no son iguales entonces colocamos los nombres de sus personajes.
  //return <p className="card-text">{characters}</p>;

  //OPCION 2 DE COMPONENTE
  return alter_ego === characters ? (
    <></>
  ) : (
    <p className="card-text">{characters}</p>
  );
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/heroes/${id}.jpg`;

  //forma #2
  //const charactersByHero = <p className="card-text">{alter_ego}</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {/*NOTA: Para que los nombres de los heroes no se repitan si su nombre es igual al de sus alter egos podemos hacer esto, asi como tambien podemos meter el <p></p> en una variable como jsx y colocar el nombre de la variable aqui, o tambien podemos crear un componente y escribimos solo el componente en esta seccion del codigo. Arriba encontraremos las otras formas de hacerlo para que el codigo se lea mejor. */}
              {/* forma #1 */}
              {/* {alter_ego !== characters && ( <p className="card-text">{alter_ego}</p>)} */}

              {/* forma #2 */}
              {/* {alter_ego !== characters && charactersByHero} */}

              {/* forma #3 */}
              <CharactersByHero characters={characters} alter_ego={alter_ego} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link aria-label="moreInfo" to={`/hero/${id}`}>
                Mas info...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
