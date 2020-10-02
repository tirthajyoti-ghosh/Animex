import genreList from '../../store/reducers/genreList';
import addGenreList from '../../store/actions/addGenreList';

describe('genreList', () => {
  test('should return initial state', () => {
    expect(genreList(undefined, {})).toEqual([]);
  });

  test('should return a new state', () => {
    const testGenreList = [
      {
        mal_id: 1,
        title: 'Title 1',
      },
      {
        mal_id: 2,
        title: 'Title 2',
      },
      {
        mal_id: 3,
        title: 'Title 3',
      },
    ];

    expect(genreList(undefined, addGenreList(testGenreList))).toEqual(testGenreList);
  });
});
