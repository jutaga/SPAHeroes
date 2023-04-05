import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from "../components"
import { useForm } from "../../hooks/useForm"
import { getHeroesByName } from "../helpers";

export const Buscar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const searchQuery = q ? q.toString() : '';

  const heroes = getHeroesByName(searchQuery);

  const { searchText, onInputChange, } = useForm({
    searchText: searchQuery
  });


  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`);

  }

  return (
    <>
      <h1 className="text-center">Busquedas</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Buscar</h4>
          <form onSubmit={onSearchSubmit} >
            <input onChange={onInputChange} value={searchText} type="text" placeholder="Buscar Heroe" className="form-control" name="searchText" autoComplete="off" />

            <button className="btn btn-outline-dark mt-3 w-100" type="submit">Buscar...</button>
          </form>
        </div>

        <div className="col-7">
          <h4 className="text-center">Resultados</h4>

          {
            (searchQuery === '')
              ?
              <div className="alert alert-dark">Buscar un Heroe</div>
              : (heroes.length === 0) && <div className="alert alert-danger">No se encontraron Resultados con <b className="text-capitalize">{q}</b></div>
          }

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}
