import { ADD_FEATURED_ANIME } from '../../constants';

const addFeaturedAnime = featuredAnime => ({
  type: ADD_FEATURED_ANIME,
  featuredAnime,
});

export default addFeaturedAnime;
