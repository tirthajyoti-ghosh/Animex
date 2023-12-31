import { FEATURED_ANIME_URL } from '../constants';

const getFeaturedAnime = () => fetch(FEATURED_ANIME_URL)
  .then(
    response => response.json(),
  )
  .then(
    response => response.data,
  );

export default getFeaturedAnime;
