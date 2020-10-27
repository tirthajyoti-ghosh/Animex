import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getAnimeList from '../API/getAnimeList';
import addAnimeList from '../store/actions/addAnimeList';
import changeAnimeType from '../store/actions/changeAnimeType';
import Filter from '../components/Filter';
import Loading from '../components/Loading';
import FeaturedAnime from './FeaturedAnime';

const mapDipatchToProps = dispatch => ({
  animeListAdder: animeArray => dispatch(addAnimeList(animeArray)),
  handleFilterChange: animeType => dispatch(changeAnimeType(animeType)),
});

const mapStateToProps = state => ({
  animeList: state.animeList,
  animeType: state.animeType,
});

const AnimeList = ({
  animeListAdder, animeList, handleFilterChange, animeType,
}) => {
  useEffect(() => {
    getAnimeList()
      .then(
        animeArray => {
          animeListAdder(animeArray);
        },
      );
  }, []); // adding dependency results in infinite number of network requests

  const animeArray = animeType === '' || animeType === 'All' ? animeList : animeList.filter(anime => anime.type === animeType);

  return (
    <main>
      <FeaturedAnime />
      <Filter handleFilterChange={handleFilterChange} animeType={animeType} />
      {
        animeList.length === 0 ? <Loading /> : (
          <div className="anime-list">
            { animeArray.map(anime => (
              <div className="anime" key={anime.mal_id}>
                <img src={anime.image_url} alt="" />
                <Link to={`/anime/${anime.mal_id}`}>{anime.title}</Link>
              </div>
            )) }
          </div>
        )
      }
    </main>
  );
};

AnimeList.propTypes = {
  animeListAdder: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  animeType: PropTypes.string.isRequired,
  animeList: PropTypes.arrayOf(PropTypes.shape({
    mal_id: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default connect(
  mapStateToProps,
  mapDipatchToProps,
)(AnimeList);
