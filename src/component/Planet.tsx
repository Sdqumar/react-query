import { planetType } from "./Planets";

type props = {
  planet: planetType;
};

const Planet = ({ planet }: props) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
