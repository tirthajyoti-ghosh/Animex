import { combineReducers } from 'redux';
import animeList from './animeList';
import genreList from './genreList';
import animeDetails from './animeDetails';
import animeType from './animeType';

export default combineReducers({
  animeList,
  genreList,
  animeDetails,
  animeType,
});
