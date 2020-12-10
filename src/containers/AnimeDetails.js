import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import getAnimeDetails from '../API/getAnimeDetails';
import addAnimeDetails from '../store/actions/addAnimeDetails';
import Loading from '../components/Loading';

const mapDipatchToProps = dispatch => ({
  animeDetailsAdder: anime => dispatch(addAnimeDetails(anime)),
});

const mapStateToProps = state => ({
  animeDetails: state.animeDetails,
});

const AnimeDetails = ({ animeDetailsAdder, animeDetails, match }) => {
  const { animeId } = match.params;

  useEffect(() => {
    setTimeout(() => { // to get around 2 requests/second rate-limit of Jikan API
      getAnimeDetails(animeId)
        .then(
          anime => {
            animeDetailsAdder(anime);
          },
        );
    }, 500);
  }, [animeDetails.mal_id]);

  const history = useHistory();

  const routeChange = () => {
    history.goBack();
  };

  return (
    <>
      {
        animeDetails.mal_id !== parseInt(animeId, 10) ? <Loading /> : (
          <main>

            <div className="blurred-background" style={{ backgroundImage: `linear-gradient(180deg, rgba(27,27,27,0.3785889355742297) 0%, rgba(27,27,27,0.9640231092436975) 65%), url(${animeDetails.image_url}` }} />

            <button
              type="button"
              className="go-back"
              onClick={() => routeChange()}
            >
              <i className="fas fa-angle-left" />
              {' '}
              Back
            </button>

            <div className="anime-details">
              <div className="anime__img">
                <img src={animeDetails.image_url} alt={animeDetails.title} />

                <div className="anime__watch-links">
                  <a href={animeDetails.url} target="_blank" rel="noopener noreferrer" className="watch">
                    <i className="fas fa-play-circle" />
                    <span>&nbsp; Watch Now</span>
                  </a>
                  {
                    animeDetails.trailer_url === null
                      ? (
                        <p>
                          <i className="fas fa-exclamation-circle" />
                          &nbsp;
                          Trailer not avaliable
                        </p>
                      )
                      : (
                        <a href={animeDetails.trailer_url} target="_blank" rel="noopener noreferrer" className="trailer">
                          <i className="fas fa-play-circle" />
                          <span>&nbsp; View Trailer</span>
                        </a>
                      )
                  }
                </div>
              </div>

              <div className="anime-info">

                <h1 className="anime__title">{animeDetails.title}</h1>

                <div className="anime__genres">
                  {
                    animeDetails.genres.map(genre => (
                      <Link
                        key={genre.mal_id}
                        to={`/genre/${genre.mal_id}/${genre.name}`}
                      >
                        {genre.name}
                      </Link>
                    ))
                  }
                </div>


                {
                  animeDetails.score === null
                    ? (
                      <p>
                        <i className="fas fa-exclamation-circle" />
                        &nbsp;
                        Score not avaliable
                      </p>
                    )
                    : (
                      <div className="anime__score">
                        <i className="fas fa-star-half-alt" />
                        <span>{animeDetails.score}</span>
                      </div>
                    )
                }

                <p>
                  Type:&nbsp;
                  {animeDetails.type}
                </p>

                <p>
                  Released:&nbsp;
                  {animeDetails.aired.string}
                </p>

                {
                  animeDetails.airing === true
                    ? (
                      <p>
                        Airing:
                        &nbsp;
                        <i className="fas fa-check" />
                      </p>
                    )
                    : (
                      <p>
                        Airing:
                        &nbsp;
                        <i className="fas fa-times" />
                      </p>
                    )
                }

                <p>
                  Duration:&nbsp;
                  {animeDetails.duration}
                </p>

                {
                  animeDetails.synopsis === null
                    ? (
                      <p>
                        <i className="fas fa-exclamation-circle" />
                        &nbsp;
                        Synopsis not avaliable
                      </p>
                    )
                    : (
                      <p>{animeDetails.synopsis}</p>
                    )
                }
              </div>
            </div>
          </main>
        )
      }
    </>
  );
};

AnimeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      animeId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  animeDetailsAdder: PropTypes.func.isRequired,
  animeDetails: PropTypes.shape({
    mal_id: PropTypes.number,
    image_url: PropTypes.string,
    url: PropTypes.string,
    trailer_url: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
    score: PropTypes.number,
    aired: PropTypes.shape({
      string: PropTypes.string,
    }),
    type: PropTypes.string,
    airing: PropTypes.bool,
    duration: PropTypes.string,
    synopsis: PropTypes.string,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDipatchToProps,
)(AnimeDetails);
