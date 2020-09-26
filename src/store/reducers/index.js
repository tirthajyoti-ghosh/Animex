import { combineReducers } from 'redux';
import animeList from './animeList';
import animeDetails from './animeDetails';
import animeType from './animeType';

export default combineReducers({
  animeList,
  animeDetails,
  animeType,
});
