import { ADD_GENRE_LIST } from '../../constants';

const addGenreList = animeList => ({
  type: ADD_GENRE_LIST,
  animeList,
});

export default addGenreList;
