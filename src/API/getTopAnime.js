import { BASE_URL } from '../constants';

const getTopAnime = () => {
  const endpoint = `${BASE_URL}top/anime/`;

  return fetch(endpoint)
    .then(
      response => response.json(),
    )
    .then(
      response => response.top,
    );
};

export default getTopAnime;
