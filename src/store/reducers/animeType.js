import { CHANGE_ANIME_TYPE } from '../../constants';

const animeType = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_ANIME_TYPE:
      return action.animeType;
    default:
      return state;
  }
};

export default animeType;
