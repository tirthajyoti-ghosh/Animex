import { ANIME_LIST_URL } from '../constants';

const getAnimeList = () => fetch(ANIME_LIST_URL)
  .then(
    response => response.json(),
  )
  .then(
    response => response.data,
  );

export default getAnimeList;
