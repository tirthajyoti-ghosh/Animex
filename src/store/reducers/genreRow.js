import { ADD_GENRE_ROW } from '../../constants';

const genreRow = (state = {}, action) => {
  switch (action.type) {
    case ADD_GENRE_ROW:
      return {
        ...state,
        [action.genre]: action.animeArray,
      };

    default:
      return state;
  }
};

export default genreRow;
