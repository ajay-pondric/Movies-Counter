import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";

const GptSearch = () => {
  return(
    <div className="gpt-search">
      <h4>This is a GPT Search Page....</h4>
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearch;
