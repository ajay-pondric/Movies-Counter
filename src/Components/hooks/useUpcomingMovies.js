import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION, UP_COMING_API } from "../../utils/constants";
import { addUpComingMovies } from "../../utils/moviesSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(UP_COMING_API, API_OPTION);
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  }

  useEffect(() =>{
    getTopRatedMovies();
  }, []);

}

export default useUpComingMovies;
