import animeList from '../../store/reducers/animeList';
import addAnimeList from '../../store/actions/addAnimeList';

describe('animeList', () => {
  test('should return initial state', () => {
    expect(animeList(undefined, {})).toEqual([]);
  });

  test('should return a new state', () => {
    const testAnimeList = [
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

    expect(animeList(undefined, addAnimeList(testAnimeList))).toEqual(testAnimeList);
  });
});
