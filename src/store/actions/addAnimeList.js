import { ADD_ANIME_LIST } from '../../constants';

const addAnimeList = animeList => ({
  type: ADD_ANIME_LIST,
  animeList,
});

export default addAnimeList;
