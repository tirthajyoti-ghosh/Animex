import { ADD_GENRE_ROW } from '../../constants';

const addGenreRow = (genre, animeArray) => ({
  type: ADD_GENRE_ROW,
  genre,
  animeArray,
});

export default addGenreRow;
