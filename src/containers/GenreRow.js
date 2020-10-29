import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import getGenreList from '../API/getGenreList';
import addGenreRow from '../store/actions/addGenreRow';
import Loading from '../components/Loading';

const mapDipatchToProps = dispatch => ({
  genreRowAdder: (genreName, animeArray) => dispatch(addGenreRow(genreName, animeArray)),
});

const mapStateToProps = state => ({
  genreRow: state.genreRow,
});

const GenreRow = ({
  genreRowAdder, genreRow, genreId, genreName,
}) => {
  useEffect(() => {
    getGenreList(genreId)
      .then(
        animeArray => {
          genreRowAdder(genreName, animeArray);
        },
      );
  }, []);


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

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
            <Slider {...settings}>
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
};

export default connect(
  mapStateToProps,
  mapDipatchToProps,
)(GenreRow);
