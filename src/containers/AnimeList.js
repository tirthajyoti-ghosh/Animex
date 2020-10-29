import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getAnimeList from '../API/getAnimeList';
import addAnimeList from '../store/actions/addAnimeList';
import FeaturedAnime from './FeaturedAnime';
import GenreRow from './GenreRow';

const mapDipatchToProps = dispatch => ({
  animeListAdder: animeArray => dispatch(addAnimeList(animeArray)),
});

const mapStateToProps = state => ({
  animeList: state.animeList,
});

const AnimeList = ({
  animeListAdder,
}) => {
  useEffect(() => {
    getAnimeList()
      .then(
        animeArray => {
          animeListAdder(animeArray);
        },
      );
  }, []); // adding dependency results in infinite number of network requests

  return (
    <main>
      <FeaturedAnime />

      <GenreRow genreId="1" genreName="action" />
      <GenreRow genreId="4" genreName="comedy" />
      <GenreRow genreId="22" genreName="romance" />
      <GenreRow genreId="27" genreName="shounen" />
      <GenreRow genreId="37" genreName="supernatural" />
    </main>
  );
};

AnimeList.propTypes = {
  animeListAdder: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDipatchToProps,
)(AnimeList);
