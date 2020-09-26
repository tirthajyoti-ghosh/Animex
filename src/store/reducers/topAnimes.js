import { ADD_TOP_ANIME } from '../../constants';

const topAnimes = (state = [], action) => {
  switch (action.type) {
    case ADD_TOP_ANIME:
      return action.topAnimes;
    default:
      return state;
  }
};

export default topAnimes;
