import { useEffect } from "react";
import { API_OPTION, TOP_RATED_API } from "../../utils/constants"
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch()

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_API, API_OPTION);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }
  useEffect(() => {
    getTopRatedMovies();
  }, []);

}

export default useTopRatedMovies;
