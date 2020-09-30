import animeType from '../../store/reducers/animeType';
import changeAnimeType from '../../store/actions/changeAnimeType';

describe('animeType', () => {
  test('should return initial state', () => {
    expect(animeType(undefined, {})).toEqual('');
  });

  test('should return a new state', () => {

    const testAnimeType = 'TV';

    expect(animeType(undefined, changeAnimeType(testAnimeType))).toEqual(testAnimeType);
  });
});
