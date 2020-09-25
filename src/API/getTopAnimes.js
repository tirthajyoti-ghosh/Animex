import { TOP_ANIME_URL } from '../constants';

const getTopAnimes = () => fetch(TOP_ANIME_URL)
  .then(
    response => response.json(),
  )
  .then(
    response => response.top,
  );

export default getTopAnimes;
