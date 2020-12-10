import { SEARCH_QUERY_URL } from '../constants';

const getSearchResults = searchQuery => fetch(SEARCH_QUERY_URL + searchQuery)
  .then(
    response => response.json(),
  )
  .then(
    response => response.results,
  );

export default getSearchResults;
