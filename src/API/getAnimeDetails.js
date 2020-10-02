import { ANIME_DETAILS_URL } from '../constants';

const getAnimeDetails = animeId => fetch(`${ANIME_DETAILS_URL}${animeId}`)
  .then(
    response => response.json(),
  )
  .then(
    response => response,
  );

export default getAnimeDetails;
