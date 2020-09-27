import { GENRE_SEARCH_URL } from '../constants';

const getGenreList = () => fetch(GENRE_SEARCH_URL)
  .then(
    response => response.json(),
  )
  .then(
    response => response.results,
  );

export default getGenreList;
