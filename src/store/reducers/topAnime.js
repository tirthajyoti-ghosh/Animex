import { ADD_TOP_ANIME } from '../../constants';

const topAnimes = (state = [], action) => {
  switch (action.type) {
    case ADD_TOP_ANIME:
      return state;
    default:
      return state;
  }
};

export default topAnimes;
