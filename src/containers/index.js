import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getTopAnimes from '../API/getTopAnimes';
import addAnimeList from '../store/actions/addAnimeList';

const mapDipatchToProps = dispatch => ({
  animeListAdder: animeArray => dispatch(addAnimeList(animeArray)),
});

const mapStateToProps = state => ({
  animeList: state.animeList,
});

const TopAnimesList = ({ animeListAdder, animeList }) => {
  useEffect(() => {
    getTopAnimes()
      .then(
        animeArray => {
          animeListAdder(animeArray);
        },
      );
  }, []);

  return (
    <>
      {
        animeList.length === 0 ? <p>Loading...</p> : (
          <ul>
            { animeList.map(anime => (
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
