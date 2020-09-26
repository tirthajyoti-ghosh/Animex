import { ANIME_LIST_URL } from '../constants';

const getTopAnimes = () => fetch(ANIME_LIST_URL)
  .then(
    response => response.json(),
  )
  .then(
    response => response.top,
  );

export default getTopAnimes;
