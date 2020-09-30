import getGenreList from '../../API/getGenreList';

describe('getGenreDetail', () => {
  test('returns an array', async () => {
    await getGenreList()
      .then(
        response => {
          expect(Array.isArray(response)).toEqual(true);
        },
      );
  });

  test('returned array is an array of objects with the properties mal_id, title, image_url', async () => {
    await getGenreList()
      .then(
        response => {
          expect(response[21]).toHaveProperty('mal_id');
          expect(response[3]).toHaveProperty('title');
          expect(response[34]).toHaveProperty('image_url');
        },
      );
  });
});
