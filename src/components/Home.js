import React from 'react';
import FeaturedAnime from '../containers/FeaturedAnime';
import GenreRow from '../containers/GenreRow';

const AnimeList = () => (
  <main>
    <FeaturedAnime />

    <GenreRow genreId="1" genreName="action" delay="500" />
    <GenreRow genreId="4" genreName="comedy" delay="1000" />
    <GenreRow genreId="22" genreName="romance" delay="1500" />
    <GenreRow genreId="27" genreName="shounen" delay="2000" />
    <GenreRow genreId="37" genreName="supernatural" delay="2500" />
  </main>
);

export default AnimeList;
