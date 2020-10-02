import { CHANGE_ANIME_TYPE } from '../../constants';

const changeAnimeType = animeType => ({
  type: CHANGE_ANIME_TYPE,
  animeType,
});

export default changeAnimeType;
