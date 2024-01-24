import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //Puedo hacerlo asi o haciendo destructuring del "query"
  //Forma #1
  //const query = queryString.parse(location.search);

  //Forma #2 - recomendada / sacamos el valor de "q" con el destructuring y si no viene nada en la "q" colcoamos un string vacio, es decir, nada.
  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({
    //colocp "q" en vez de un string vacio para que cuando haga refresh en la pagina no se pierda lo escrito en el input por el user, por lo que se toma la ultima info de q como referencia.
    searchText: q,
  });

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if (searchText.trim().length <= 1) return;

    //Asi enviamos la informacion que el user escribe en el input la cual estara en el "searchText" en los querys params. si colocamos navigate(``) estariamos apuntando al lugar en el que nos encontramos en ese momento.
    //Pero como queremos enviar la info mandamos la query asi... Tambien podemos controlar su forma con lower/upper camel case.
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label="form">
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* NOTA: Esta seria una forma de mostrar o no las alertas */}
          {/* {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">There's no {q} results </div>
            )
          )} */}

          {/* Esta forma de  mostrarlas es mas legible */}
          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "" : "none" }}
            aria-label="search a hero"
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
            aria-label="no hero found"
          >
            There's no {q} results{" "}
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
