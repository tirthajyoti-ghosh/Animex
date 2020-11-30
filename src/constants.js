const CORS_HANDLER = 'https://ghosh-cors-anywhere.herokuapp.com/';
const BASE_URL = `${CORS_HANDLER}https://api.jikan.moe/v3/`;
const BASE_SEARCH_URL = `${BASE_URL}search/anime?`;

export const ANIME_LIST_URL = `${BASE_SEARCH_URL}rated=pg13&order_by=score`;
export const FEATURED_ANIME_URL = `${BASE_SEARCH_URL}rated=pg13&status=airing`;
export const ANIME_DETAILS_URL = `${BASE_URL}anime/`;
export const GENRE_SEARCH_URL = `${BASE_SEARCH_URL}rated=pg13&order_by=score&genre=`;
export const SEARCH_QUERY_URL = `${BASE_SEARCH_URL}rated=pg13&q=`;

export const ADD_FEATURED_ANIME = 'ADD_FEATURED_ANIME';
export const ADD_GENRE_LIST = 'ADD_GENRE_LIST';
export const ADD_ANIME_DETAILS = 'ADD_ANIME_DETAILS';
export const ADD_GENRE_ROW = 'ADD_GENRE_ROW';

export const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1690,
      settings: {
        slidesToShow: 5.5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1590,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1490,
      settings: {
        slidesToShow: 4.8,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1390,
      settings: {
        slidesToShow: 4.3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1190,
      settings: {
        slidesToShow: 3.6,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1090,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2.8,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2.4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1.8,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
