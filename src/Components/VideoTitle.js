import {  FaPlay } from "react-icons/fa";


const VideoTitle = ({title, overview}) => {
  return(
    <div className="video-title">
     <h1><strong>{title}</strong></h1>
      <p>{overview}</p>
      <button className="play-button"> <FaPlay/>  Play</button>
      <button className="more-info">More Info</button>
    </div>

  );
};

export default VideoTitle;