import featuredAnime from '../../store/reducers/featuredAnime';
import addFeaturedAnime from '../../store/actions/addFeaturedAnime';

describe('featuredAnime', () => {
  test('should return initial state', () => {
    expect(featuredAnime(undefined, {})).toEqual({});
  });

  test('should return a new state', () => {
    const testFeaturedAnime = {
      mal_id: 1,
      title: 'Title 1',
    };

    expect(featuredAnime(undefined, addFeaturedAnime(testFeaturedAnime)))
      .toEqual(testFeaturedAnime);
  });
});
