import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";
import "animate.css";

export const HeroPage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();

  //Aqui memorizamos la info sobre los heroes que pedimos a la funcion, de esta forma no lo cargamos cada vez. A menos que el heroId cambie.
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const onReturn = () => {
    //usar el -1 te lleva a la pantalla del historial anterior.
    navigate(-1);
  };

  //Uso esta redireccion para que si el user manipula la url a una no valida/ que no exista no me aparezca undefined sino que se redirija a esta ruta que yo defini.
  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          src={`/heroes/${heroId}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail "
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b>
            {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
