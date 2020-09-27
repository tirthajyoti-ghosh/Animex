import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getGenreList from '../API/getGenreList';
import addGenreList from '../store/actions/addGenreList';

const mapDipatchToProps = dispatch => ({
  genreListAdder: animeArray => dispatch(addGenreList(animeArray)),
});

const mapStateToProps = state => ({
  genreList: state.genreList,
});

const GenreList = ({ genreListAdder, animeList }) => {
  useEffect(() => {
    getGenreList()
      .then(
        animeArray => {
          genreListAdder(animeArray);
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
)(GenreList);
