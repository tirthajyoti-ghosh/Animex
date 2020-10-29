import { combineReducers } from 'redux';
import animeList from './animeList';
import featuredAnime from './featuredAnime';
import genreList from './genreList';
import genreRow from './genreRow';
import animeDetails from './animeDetails';
import animeType from './animeType';

export default combineReducers({
  animeList,
  featuredAnime,
  genreRow,
  genreList,
  animeDetails,
  animeType,
});
