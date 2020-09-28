import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    getAnimeDetails(animeId)
      .then(
        anime => {
          animeDetailsAdder(anime);
        },
      );
  }, [animeId]);

  return (
    <main style={{ backgroundImage: `radial-gradient(circle, rgba(27,27,27,0.577468487394958) 0%, rgba(27,27,27,1) 50%), url(${animeDetails.image_url}` }}>
      {
        Object.keys(animeDetails).length === 0 ? <Loading /> : (
          <div className="anime-details">
            <div className="anime__img">
              <img src={animeDetails.image_url} alt={animeDetails.title} />
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

              <p>
                Type:&nbsp;
                {animeDetails.type}
              </p>

              <p>
                Released:&nbsp;
                {animeDetails.aired.string}
              </p>

              <p>
                Duration:&nbsp;
                {animeDetails.duration}
              </p>

              <p>
                Rating:&nbsp;
                {animeDetails.rating}
              </p>

              <p>
                Score:&nbsp;
                {animeDetails.score}
              </p>

              <p>
                Synopsis:&nbsp;
                {animeDetails.synopsis}
              </p>

            </div>

          </div>
        )
      }
    </main>
  );
};

export default connect(
  mapStateToProps,
  mapDipatchToProps,
)(AnimeDetails);
