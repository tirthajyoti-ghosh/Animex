import { ADD_ANIME_LIST } from '../../constants';

const animeList = (state = [], action) => {
  switch (action.type) {
    case ADD_ANIME_LIST:
      return action.animeList;
    default:
      return state;
  }
};

export default animeList;
