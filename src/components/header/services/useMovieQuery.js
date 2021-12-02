import { useQuery } from "react-query";

const getMovies = async (queryType, query) =>
  fetch(
    `https://api.themoviedb.org/3/search/${queryType}?api_key=fdca631f4b9babbd32b6f8487c1dfad1&language=en-US&query=${query}&page=1&include_adult=false`
  ).then((res) => res.json());

const useMoviesQuery = (queryType, query) => {
  return useQuery(["movies", query], () => getMovies(queryType, query));
};

export default useMoviesQuery;
