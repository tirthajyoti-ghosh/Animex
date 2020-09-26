import { ADD_ANIME_DETAILS } from '../../constants';

const animeDetails = (state = {}, action) => {
  switch (action.type) {
    case ADD_ANIME_DETAILS:
      return action.animeDetails;
    default:
      return state;
  }
};

export default animeDetails;
