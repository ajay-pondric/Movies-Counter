import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return ( 
    movies.nowPlayingMovies &&
    <div className="secondary-container">
      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MoviesList title={"Popular Movies"} movies={movies.popularMovies} />
      <MoviesList title={"Up Coming"} movies={movies.upComingMovies} />
    </div>
  );
};

export default SecondaryContainer;
