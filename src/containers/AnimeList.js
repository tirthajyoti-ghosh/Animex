import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getAnimeList from '../API/getAnimeList';
import addAnimeList from '../store/actions/addAnimeList';
import changeAnimeType from '../store/actions/changeAnimeType';
import Filter from '../components/Filter';
import FeaturedAnime from './FeaturedAnime';
import GenreRow from './GenreRow';

const mapDipatchToProps = dispatch => ({
  animeListAdder: animeArray => dispatch(addAnimeList(animeArray)),
  handleFilterChange: animeType => dispatch(changeAnimeType(animeType)),
});

const mapStateToProps = state => ({
  animeList: state.animeList,
  animeType: state.animeType,
});

const AnimeList = ({
  animeListAdder, handleFilterChange, animeType,
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
      <Filter handleFilterChange={handleFilterChange} animeType={animeType} />

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
  handleFilterChange: PropTypes.func.isRequired,
  animeType: PropTypes.string.isRequired,
  animeList: PropTypes.arrayOf(PropTypes.shape({
    mal_id: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default connect(
  mapStateToProps,
  mapDipatchToProps,
)(AnimeList);
