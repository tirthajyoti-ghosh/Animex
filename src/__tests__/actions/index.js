import {
  ADD_GENRE_LIST, ADD_ANIME_DETAILS, ADD_GENRE_ROW, ADD_FEATURED_ANIME,
} from '../../constants';

import addAnimeDetails from '../../store/actions/addAnimeDetails';
import addGenreList from '../../store/actions/addGenreList';
import addFeaturedAnime from '../../store/actions/addFeaturedAnime';
import addGenreRow from '../../store/actions/addGenreRow';

describe('Actions', () => {
  test('add genre list', () => {
    const expectedResult = {
      type: ADD_GENRE_LIST,
      animeList: [],
    };

    expect(addGenreList([])).toEqual(expectedResult);
  });

  test('add anime details', () => {
    const expectedResult = {
      type: ADD_ANIME_DETAILS,
      animeDetails: {},
    };

    expect(addAnimeDetails({})).toEqual(expectedResult);
  });

  test('add genre row', () => {
    const expectedResult = {
      type: ADD_GENRE_ROW,
      genre: 'action',
      animeArray: [],
    };

    expect(addGenreRow('action', [])).toEqual(expectedResult);
  });

  test('add featured anime', () => {
    const expectedResult = {
      type: ADD_FEATURED_ANIME,
      featuredAnime: {},
    };

    expect(addFeaturedAnime({})).toEqual(expectedResult);
  });
});
