import { ADD_ANIME_DETAILS } from '../../constants';

const addTopAnimes = animeDetails => ({
  type: ADD_ANIME_DETAILS,
  animeDetails,
});

export default addTopAnimes;
