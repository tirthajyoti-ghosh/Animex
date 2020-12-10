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
    setTimeout(() => { // to get around 2 requests/second rate-limit of Jikan API
      getFeaturedAnime()
        .then(
          featuredAnime => {
            featuredAnimeAdder(featuredAnime[Math.floor(Math.random() * 50)]);
          },
        );
    }, 500);
  }, []); // adding dependency results in infinite number of network requests

  return (
    <>
      {
        featuredAnime.mal_id === undefined ? <Loading /> : (
          <section className="featured-anime">

            <div className="blurred-background" style={{ backgroundImage: `linear-gradient(180deg, rgba(27,27,27,0.5998774509803921) 20%, rgba(27,27,27,1) 85%), url(${featuredAnime.image_url}` }} />

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

                <span>{parseInt(featuredAnime.start_date, 10)}</span>
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
  featuredAnimeAdder: PropTypes.func.isRequired,
  featuredAnime: PropTypes.shape({
    mal_id: PropTypes.number,
    image_url: PropTypes.string,
    title: PropTypes.string,
    score: PropTypes.number,
    start_date: PropTypes.string,
    type: PropTypes.string,
    synopsis: PropTypes.string,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDipatchToProps,
)(FeaturedAnime);
