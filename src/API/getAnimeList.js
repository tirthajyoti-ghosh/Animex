import { ANIME_LIST_URL } from '../constants';

const getAnimesList = () => fetch(ANIME_LIST_URL)
  .then(
    response => response.json(),
  )
  .then(
    response => response.results,
  );

export default getAnimesList;
