import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          //Para pasar todas las props que contiene "hero" sin tener que copiarlas una a una uso el spread operator.
          {...hero}
        />
      ))}
    </div>
  );
};
