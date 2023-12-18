import { useEffect } from "react";
import { addTrailerVideo } from "../../utils/moviesSlice";
import { API_OPTION } from "../../utils/constants";
import { useDispatch } from "react-redux";

 const useMoviesTrailer = (moviesId) => {

  const dispatch = useDispatch();

  const getMoviesVideos = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' + moviesId + '/videos?language=en-US', API_OPTION);
    const json = await data.json();
    

    const filterData = json.results.filter((video) => video.type === "Trailer") ;
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  }

 useEffect(() => {
  getMoviesVideos();
}, []);
 }

export default useMoviesTrailer;
