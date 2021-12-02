import useMoviesQuery from "./services/useMovieQuery";
import Movies from "./movies";
import Tv from "./tv";
import People from "./people";
const Suggestions = ({ queryType, query }) => {
  const { isLoading, error, data } = useMoviesQuery(queryType, query);
  if (isLoading) return "Loading...";
  if (error) return "an error has ocurred:" + error.message;
  if (queryType === "movie") {
    return <Movies data={data} />;
  } else if (queryType === "tv") {
    return <Tv data={data} />;
  } else {
    return <People data={data} />;
  }
};

export default Suggestions;
