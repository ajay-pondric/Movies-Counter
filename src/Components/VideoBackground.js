import { useSelector } from "react-redux";
import useMoviesTrailer from "./hooks/useMoviesTrailer";

const VideoBackground = ({ moviesId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMoviesTrailer(moviesId);

  return (
    <div className="video-background">
      <iframe
        className="iframe"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
