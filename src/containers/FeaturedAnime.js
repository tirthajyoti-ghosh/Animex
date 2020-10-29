import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getFeaturedAnime from '../API/getFeaturedAnime';
import Loading from '../components/Loading';
import addFeaturedAnime from '../store/actions/addFeaturedAnime';

const mapDipatchToProps = dispatch => ({
  featuredAnimeAdder: featuredAnime => dispatch(addFeaturedAnime(featuredAnime)),
});

const mapStateToProps = state => ({
  featuredAnime: state.featuredAnime,
});

const FeaturedAnime = ({
  featuredAnimeAdder, featuredAnime,
}) => {
  useEffect(() => {
    getFeaturedAnime()
      .then(
        featuredAnime => {
          featuredAnimeAdder(featuredAnime[Math.floor(Math.random() * 50)]);
        },
      );
  }, []); // adding dependency results in infinite number of network requests

  return (
    <>
      {
        featuredAnime.mal_id === undefined ? <Loading /> : (
          <section className="featured-anime">

            <div className="blurred-background" style={{ backgroundImage: `linear-gradient(180deg, rgba(27,27,27,0.4990371148459384) 34%, rgba(27,27,27,1) 100%), url(${featuredAnime.image_url}` }} />

            <div className="left">

              <header>
                <span className="active">overview</span>
                <span><Link to={`/anime/${featuredAnime.mal_id}`}>details</Link></span>
              </header>

              <h1>{featuredAnime.title}</h1>

              <div className="stats">
                {
                  featuredAnime.score === null
                    ? ''
                    : (
                      <div className="anime__score">
                        <i className="fas fa-star-half-alt" />
                        <span>{featuredAnime.score}</span>
                      </div>
                    )
                  }

                <span>{featuredAnime.start_date.split('-')[0]}</span>
                <span>{featuredAnime.type}</span>
              </div>
              <p>{featuredAnime.synopsis}</p>

              <div className="cta-btn">
                <a href="/">
                  <i className="fas fa-bookmark" />
                  &nbsp;
                  Add to...
                </a>
                <a href="/">
                  <i className="fas fa-thumbs-up" />
                  &nbsp;
                  Like
                </a>
              </div>
            </div>

            <div className="right">
              <img src={featuredAnime.image_url} alt={featuredAnime.title} />
            </div>
          </section>
        )
      }
    </>
  );
};

FeaturedAnime.propTypes = {
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
)(FeaturedAnime);
