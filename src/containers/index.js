import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getAnimeList from '../API/getAnimeList';
import addAnimeList from '../store/actions/addAnimeList';
import Filter from '../components/Filter';

const mapDipatchToProps = dispatch => ({
  animeListAdder: animeArray => dispatch(addAnimeList(animeArray)),
});

const mapStateToProps = state => ({
  animeList: state.animeList,
});

const TopAnimesList = ({ animeListAdder, animeList }) => {
  useEffect(() => {
    getAnimeList()
      .then(
        animeArray => {
          animeListAdder(animeArray);
        },
      );
  }, []);

  const [type, setType] = useState('');

  const handleFilterChange = type => (
    setType(type)
  );

  const animeArray = type === '' || type === 'All' ? animeList : animeList.filter(anime => anime.type === type);

  return (
    <>
      <Filter handleFilterChange={handleFilterChange} />
      {
        animeList.length === 0 ? <p>Loading...</p> : (
          <ul>
            { animeArray.map(anime => (
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
