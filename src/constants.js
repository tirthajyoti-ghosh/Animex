const CORS_HANDLER = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = `${CORS_HANDLER}https://api.jikan.moe/v3/`;
const BASE_SEARCH_URL = `${BASE_URL}search/anime?`;

export const ANIME_LIST_URL = `${BASE_SEARCH_URL}rated=pg13&order_by=score`;
export const FEATURED_ANIME_URL = `${BASE_SEARCH_URL}rated=pg13&status=airing`;
export const ANIME_DETAILS_URL = `${BASE_URL}anime/`;
export const GENRE_SEARCH_URL = `${BASE_SEARCH_URL}rated=pg13&status=airing&order_by=score&genre=`;

export const ADD_ANIME_LIST = 'ADD_ANIME_LIST';
export const ADD_FEATURED_ANIME = 'ADD_FEATURED_ANIME';
export const ADD_GENRE_LIST = 'ADD_GENRE_LIST';
export const ADD_ANIME_DETAILS = 'ADD_ANIME_DETAILS';
export const CHANGE_ANIME_TYPE = 'CHANGE_ANIME_TYPE';
