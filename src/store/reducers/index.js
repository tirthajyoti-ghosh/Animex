import { combineReducers } from 'redux';
import animeList from './animeList';
import featuredAnime from './featuredAnime';
import genreList from './genreList';
import animeDetails from './animeDetails';
import animeType from './animeType';

export default combineReducers({
  animeList,
  featuredAnime,
  genreList,
  animeDetails,
  animeType,
});
