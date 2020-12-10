import { combineReducers } from 'redux';
import featuredAnime from './featuredAnime';
import genreList from './genreList';
import genreRow from './genreRow';
import animeDetails from './animeDetails';

export default combineReducers({
  featuredAnime,
  genreRow,
  genreList,
  animeDetails,
});
