import { combineReducers } from 'redux';
import animeList from './animeList';
import animeDetails from './animeDetails';

export default combineReducers({
  animeList,
  animeDetails,
});
