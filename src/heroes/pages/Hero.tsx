import { Navigate, Params, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const Hero = () => {

  const { heroId }: Readonly<Params<string>> = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => heroId ? getHeroById(heroId) : undefined, [heroId]);

  const marvelDc = () => {

    return hero?.publisher === 'DC Comics' ? '/dc' : '/marvel';

  }

  const onNavigateBack = () => {

    const destination = marvelDc();

    navigate(destination);

    return <Navigate to={destination} />
  };


  if (!hero) {
    return <Navigate to={"/marvel"} />
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-md-4">
        <img src={`/assets/heroes/${heroId}.jpg`} alt={hero.superhero} className="img-fluid rounded-2 shadow " />
      </div>

      <div className="col-md-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego: </b> {hero.alter_ego} </li>
          <li className="list-group-item"> <b>Publisher: </b> {hero.publisher} </li>
          <li className="list-group-item"> <b>First appereance: </b> {hero.first_appearance} </li>
          <li className="list-group-item"> <b>Names: </b> {hero.characters} </li>
        </ul>

        <button className="btn btn-outline-dark mt-3 float-end" onClick={onNavigateBack}>
          Regresar...
        </button>
      </div>
    </div>
  )
}
