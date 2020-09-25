import { ADD_TOP_ANIME } from '../../constants';

const topAnime = (state = [], action) => {
  switch (action.type) {
    case ADD_TOP_ANIME:
      return state;
    default:
      return state;
  }
};

export default topAnime;
