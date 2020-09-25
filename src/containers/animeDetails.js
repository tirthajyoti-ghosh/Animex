import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getAnimeDetails from '../API/getAnimeDetails';
import addAnimeDetails from '../store/actions/addAnimeDetails';

const mapDipatchToProps = dispatch => ({
  animeDetailsAdder: animeArray => dispatch(addAnimeDetails(animeArray)),
});

const mapStateToProps = state => ({
  animeDetails: state.animeDetails,
});

const TopAnimesList = ({ animeDetailsAdder, animeDetails, match }) => {
  const { animeId } = match.params;
  useEffect(() => {
    getAnimeDetails()
      .then(
        anime => {
          animeDetailsAdder(anime);
        },
      );
  }, [animeId]);

  return (
    <>
      {
        topAnimes.length === 0 ? <p>Loading...</p> : (
          <ul>
            { topAnimes.map(anime => (
              <li key={anime.mal_id}>
                {anime.title}
                <img src={anime.image_url} alt="" />
                <Link to={`/anime/${anime.mal_id}`}>More</Link>
              </li>
            )) }
          </ul>
        )
      }
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDipatchToProps,
)(TopAnimesList);
