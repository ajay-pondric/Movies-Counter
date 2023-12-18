import { CDN_URL } from "../utils/constants";

const MoviesCards = ({poster}) => {
  return(
    <div className="movies-cards">
      <div className="movie-poster">
        <img className="poster" alt="Movie Poster" src={CDN_URL + poster} />
        </div>
    </div>
  );
};

export default MoviesCards;