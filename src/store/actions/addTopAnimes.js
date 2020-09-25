import { ADD_TOP_ANIME } from '../../constants';

const addTopAnimes = topAnimes => ({
  type: ADD_TOP_ANIME,
  topAnimes,
});

export default addTopAnimes;
