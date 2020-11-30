import {
  ADD_GENRE_LIST, ADD_ANIME_DETAILS,
} from '../../constants';

import addAnimeDetails from '../../store/actions/addAnimeDetails';
import addGenreList from '../../store/actions/addGenreList';

describe('Actions', () => {
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
});
