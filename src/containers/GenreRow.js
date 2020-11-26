/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import getGenreList from '../API/getGenreList';
import addGenreRow from '../store/actions/addGenreRow';
import Loading from '../components/Loading';
import { sliderSettings } from '../constants';

const mapDipatchToProps = dispatch => ({
  genreRowAdder: (genreName, animeArray) => dispatch(addGenreRow(genreName, animeArray)),
});

const mapStateToProps = state => ({
  genreRow: state.genreRow,
});

const GenreRow = ({
  genreRowAdder, genreRow, genreId, genreName, delay,
}) => {
  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));

      /* eslint-disable no-param-reassign */
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setTimeout(() => { // to get around 2 requests/second rate-limit of Jikan API
      getGenreList(genreId)
        .then(
          animeArray => {
            genreRowAdder(genreName, shuffle(animeArray));
          },
        );
    }, delay);
  }, []);

  return (
    <>
      {
        genreRow[genreName] === undefined ? <Loading /> : (
          <>
            <h2 className="genre-title">
              {genreName}
              {' '}
              animes
            </h2>
            <Slider {...sliderSettings}>
              { genreRow[genreName].map(anime => (
                <a href={`/anime/${anime.mal_id}`} className="anime" key={anime.mal_id}>
                  <img src={anime.image_url} alt="" />
                  <span>{anime.title}</span>
                </a>
              )) }
            </Slider>
          </>
        )
      }
    </>
  );
};

GenreRow.propTypes = {
  genreId: PropTypes.string.isRequired,
  genreName: PropTypes.string.isRequired,
  genreRowAdder: PropTypes.func.isRequired,
  genreRow: PropTypes.shape({
    genreName: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  delay: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDipatchToProps,
)(GenreRow);
