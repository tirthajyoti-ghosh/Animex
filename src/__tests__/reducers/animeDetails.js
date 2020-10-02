import animeDetails from '../../store/reducers/animeDetails';
import addAnimeDetails from '../../store/actions/addAnimeDetails';

describe('animeDetails', () => {
  test('should return initial state', () => {
    expect(animeDetails(undefined, {})).toEqual({});
  });

  test('should return a new state', () => {
    const testAnime = {
      title: 'Test Title',
      synopsis: 'Summary',
    };

    expect(animeDetails(undefined, addAnimeDetails(testAnime))).toEqual(testAnime);
  });
});
