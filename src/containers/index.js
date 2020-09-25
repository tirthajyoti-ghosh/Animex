import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getTopAnimes from '../API/getTopAnimes';
import addTopAnimes from '../store/actions/addTopAnimes';

const mapDipatchToProps = dispatch => ({
  topAnimesAdder: animeArray => dispatch(addTopAnimes(animeArray)),
});

const mapStateToProps = state => ({
  topAnimes: state.topAnimes,
});

const TopAnimesList = ({ topAnimesAdder, topAnimes }) => {
  useEffect(() => {
    getTopAnimes()
      .then(
        animeArray => {
          topAnimesAdder(animeArray);
        },
      );
  }, []);

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
