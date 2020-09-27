import { ADD_GENRE_LIST } from '../../constants';

const genreList = (state = [], action) => {
  switch (action.type) {
    case ADD_GENRE_LIST:
      return action.animeList;
    default:
      return state;
  }
};

export default genreList;
