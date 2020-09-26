import { ADD_ANIME_DETAILS } from '../../constants';

const addAnimeDetails = animeDetails => ({
  type: ADD_ANIME_DETAILS,
  animeDetails,
});

export default addAnimeDetails;
