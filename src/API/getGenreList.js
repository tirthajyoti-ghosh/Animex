import { GENRE_SEARCH_URL } from '../constants';

const getGenreList = genreId => fetch(`${GENRE_SEARCH_URL}${genreId}`)
  .then(
    response => response.json(),
  )
  .then(
    response => response.results,
  );

export default getGenreList;
