import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getAnimeDetails from '../API/getAnimeDetails';
import addAnimeDetails from '../store/actions/addAnimeDetails';

const mapDipatchToProps = dispatch => ({
  animeDetailsAdder: anime => dispatch(addAnimeDetails(anime)),
});

const mapStateToProps = state => ({
  animeDetails: state.animeDetails,
});

const TopAnimesList = ({ animeDetailsAdder, animeDetails, match }) => {
  const { animeId } = match.params;
  useEffect(() => {
    getAnimeDetails(animeId)
      .then(
        anime => {
          animeDetailsAdder(anime);
        },
      );
  }, [animeId]);

  return (
    <>
      {
        Object.keys(animeDetails).length === 0
          ? <p>Loading...</p>
          : (
            <>
              <p>
                Title:&nbsp;
                {animeDetails.title}
              </p>
              <hr />
              <p>
                Type:&nbsp;
                {animeDetails.type}
              </p>
              <hr />
              <p>
                Released:&nbsp;
                {animeDetails.aired.string}
              </p>
              <hr />
              <p>
                Duration:&nbsp;
                {animeDetails.duration}
              </p>
              <hr />
              <p>
                Rating:&nbsp;
                {animeDetails.rating}
              </p>
              <hr />
              <p>
                Score:&nbsp;
                {animeDetails.score}
              </p>
              <hr />
              <p>
                Synopsis:&nbsp;
                {animeDetails.synopsis}
              </p>
              <hr />
            </>
          )
      }
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDipatchToProps,
)(TopAnimesList);
