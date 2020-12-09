import genreRow from '../../store/reducers/genreRow';
import addGenreRow from '../../store/actions/addGenreRow';

describe('genreRow', () => {
  test('should return initial state', () => {
    expect(genreRow(undefined, {})).toEqual({});
  });

  test('should return a new state', () => {
    const testGenreRow = {
      action: [],
    };

    expect(genreRow(undefined, addGenreRow('action', []))).toEqual(testGenreRow);
  });
});
