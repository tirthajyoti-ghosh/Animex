import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getTopAnime from '../API/getTopAnime';
import addTopAnimes from '../store/actions/addTopAnime';

const mapDipatchToProps = dispatch => ({
  topAnimesAdder: animeArray => dispatch(addTopAnimes(animeArray)),
});

const mapStateToProps = state => ({
  topAnimes: state.topAnimes,
});

const TopAnimesList = ({ topAnimesAdder, topAnimes }) => {
  useEffect(() => {
    getTopAnime()
      .then(
        animeArray => {
          topAnimesAdder(animeArray);
        },
      );
  }, [topAnimesAdder]);

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
