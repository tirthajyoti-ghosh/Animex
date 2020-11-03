import { ADD_FEATURED_ANIME } from '../../constants';

const featuredAnime = (state = {}, action) => {
  switch (action.type) {
    case ADD_FEATURED_ANIME:
      return action.featuredAnime;
    default:
      return state;
  }
};

export default featuredAnime;
