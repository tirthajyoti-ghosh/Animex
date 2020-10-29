import React from 'react';
import FeaturedAnime from '../containers/FeaturedAnime';
import GenreRow from '../containers/GenreRow';

const AnimeList = () => (
  <main>
    <FeaturedAnime />

    <GenreRow genreId="1" genreName="action" />
    <GenreRow genreId="4" genreName="comedy" />
    <GenreRow genreId="22" genreName="romance" />
    <GenreRow genreId="27" genreName="shounen" />
    <GenreRow genreId="37" genreName="supernatural" />
  </main>
);

export default AnimeList;
