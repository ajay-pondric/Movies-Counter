import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION, POPULAR_API } from "../../utils/constants";
import { addPopularMovies } from "../../utils/moviesSlice";



const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_API, API_OPTION);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }
   
  useEffect(() => {
    getPopularMovies();
  }, []);

}

export default usePopularMovies;
