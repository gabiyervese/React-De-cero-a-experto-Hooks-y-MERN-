import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  //Aqui hacemos la lista de publishers validos.
  const validPublishers = ["DC Comics", "Marvel Comics"];

  //Si no incluye el pusblisher que se le ha pasado lanzara un error.
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  //Si el publisher si esta incluido en la lista de validos entonces filtramos la lista de "heroes" en la que mostrara solo los heroes que tengan el publisher  === al publisher que se le ha pasado a la funcion. Es decir, si es de DC Comics solo filtrara los heroes de DC.
  return heroes.filter((heroe) => heroe.publisher === publisher);
};
