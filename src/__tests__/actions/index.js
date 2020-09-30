import {
  ADD_ANIME_LIST, ADD_GENRE_LIST, ADD_ANIME_DETAILS, CHANGE_ANIME_TYPE,
} from '../../constants';

import addAnimeDetails from '../../store/actions/addAnimeDetails';
import addAnimeList from '../../store/actions/addAnimeList';
import addGenreList from '../../store/actions/addGenreList';
import changeAnimeType from '../../store/actions/changeAnimeType';

describe('Actions', () => {
  test('creates an action to add anime list', () => {
    const expectedResult = {
      type: ADD_ANIME_LIST,
      animeList: [],
    };

    expect(addAnimeList([])).toEqual(expectedResult);
  });

  test('creates an action to add genre list', () => {
    const expectedResult = {
      type: ADD_GENRE_LIST,
      animeList: [],
    };

    expect(addGenreList([])).toEqual(expectedResult);
  });

  test('creates an action to add anime details', () => {
    const expectedResult = {
      type: ADD_ANIME_DETAILS,
      animeDetails: {},
    };

    expect(addAnimeDetails({})).toEqual(expectedResult);
  });

  test('creates an action to change anime type', () => {
    const animeType = 'Movie';

    const expectedResult = {
      type: CHANGE_ANIME_TYPE,
      animeType,
    };

    expect(changeAnimeType(animeType)).toEqual(expectedResult);
  });
});
