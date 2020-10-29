import { ADD_GENRE_ROW } from '../../constants';

const addGenreRow = (genre, animeList) => ({
  type: ADD_GENRE_ROW,
  genre,
  animeList,
});

export default addGenreRow;
