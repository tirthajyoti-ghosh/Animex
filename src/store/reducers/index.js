import { combineReducers } from 'redux';
import topAnimes from './topAnimes';
import animeDetails from './animeDetails';

export default combineReducers({
  topAnimes,
  animeDetails,
});
