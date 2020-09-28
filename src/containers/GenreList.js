import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getGenreList from '../API/getGenreList';
import addGenreList from '../store/actions/addGenreList';
import Loading from '../components/Loading';

const mapDipatchToProps = dispatch => ({
  genreListAdder: animeArray => dispatch(addGenreList(animeArray)),
});

const mapStateToProps = state => ({
  genreList: state.genreList,
});

const GenreList = ({ genreListAdder, genreList, match }) => {
  const { genreId, genreName } = match.params;

  useEffect(() => {
    getGenreList(genreId)
      .then(
        animeArray => {
          genreListAdder(animeArray);
        },
      );
  }, [genreId]);

  return (
    <main>
      {
        genreList.length === 0 ? <Loading /> : (
          <>
            <h1 className="genre-name">{genreName}</h1>
            <div className="anime-list">
              { genreList.map(anime => (
                <div className="anime" key={anime.mal_id}>
                  <img src={anime.image_url} alt="" />
                  <Link to={`/anime/${anime.mal_id}`}>{anime.title}</Link>
                </div>
              )) }
            </div>
          </>
        )
      }
    </main>
  );
};

export default connect(
  mapStateToProps,
  mapDipatchToProps,
)(GenreList);
