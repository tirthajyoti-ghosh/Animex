import getAnimeList from '../../API/getAnimeList';

describe('getAnimeDetail', () => {
  test('returns an array', async () => {
    await getAnimeList()
      .then(
        response => {
          expect(Array.isArray(response)).toEqual(true);
        },
      );
  });

  test('returned array is an array of objects with the properties mal_id, title, image_url', async () => {
    await getAnimeList()
      .then(
        response => {
          expect(response[21]).toHaveProperty('mal_id');
          expect(response[3]).toHaveProperty('title');
          expect(response[34]).toHaveProperty('image_url');
        },
      );
  });
});
