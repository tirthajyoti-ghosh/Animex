import { ADD_ANIME_DETAILS } from '../../constants';

const topAnimes = (state = {}, action) => {
  switch (action.type) {
    case ADD_ANIME_DETAILS:
      return action.animeDetails;
    default:
      return state;
  }
};

export default topAnimes;
