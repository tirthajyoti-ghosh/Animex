import { ADD_TOP_ANIME } from '../../constants';

const addTopAnime = topAnimes => ({
  type: ADD_TOP_ANIME,
  topAnimes,
});

export default addTopAnime;
