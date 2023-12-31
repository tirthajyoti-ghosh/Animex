import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getGenreList from '../API/getGenreList';
import addGenreList from '../store/actions/addGenreList';
import Loading from '../components/Loading';

const mapDispatchToProps = dispatch => ({
  genreListAdder: animeArray => dispatch(addGenreList(animeArray)),
});

const mapStateToProps = state => ({
  genreList: state.genreList,
});

const GenreList = ({ genreListAdder, genreList, match }) => {
  const { genreId, genreName } = match.params;

  useEffect(() => {
    setTimeout(() => { // to get around 2 requests/second rate-limit of Jikan API
      getGenreList(genreId)
        .then(
          animeArray => {
            genreListAdder(animeArray);
          },
        );
    }, 500);
  }, [genreId]);

  return (
    <main>
      {
        genreList.length === 0 ? <Loading /> : (
          <>
            <h1 className="genre-name">
              {genreName}
              {' '}
              animes
            </h1>
            <div className="anime-list">
              { genreList.map(anime => (
                <a href={`/anime/${anime.mal_id}`} className="anime" key={anime.mal_id}>
                  <img src={anime.images.webp.image_url} alt="" />
                  <span>{anime.title}</span>
                </a>
              )) }
            </div>
          </>
        )
      }
    </main>
  );
};

GenreList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      genreId: PropTypes.string.isRequired,
      genreName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  genreListAdder: PropTypes.func.isRequired,
  genreList: PropTypes.arrayOf(PropTypes.shape({
    mal_id: PropTypes.number.isRequired,
    images: PropTypes.shape({
      webp: PropTypes.shape({
        image_url: PropTypes.string,
        large_image_url: PropTypes.string,
        small_image_url: PropTypes.string,
      }),
    }),
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenreList);
