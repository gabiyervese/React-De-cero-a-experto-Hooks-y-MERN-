import { heroes } from "../data/heroes";

export const getHeroByName = (name = "") => {
  if (name.lenght === 0) return [];

  //Pasamos el nombre a minuscula y eliminamos los espacios de adelante y de atras.
  name = name.toLowerCase().trim();

  //Si el usuario si escribe un name entonces filtramos para encontrarlo dentro de la lista de heroes segun su name.
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
