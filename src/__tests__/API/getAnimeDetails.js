import getAnimeDetails from '../../API/getAnimeDetails';

describe(
  'getAnimeDetail',
  () => {
    test('returns an object with the properties mal_id, title, synopsis', async () => {
      await getAnimeDetails(32281)
        .then(
          response => {
            expect(response).toHaveProperty('mal_id');
            expect(response).toHaveProperty('title');
            expect(response).toHaveProperty('synopsis');
            expect(response.title).toMatch(/Kimi no Na wa./);
          },
        );
    });
  },
);
