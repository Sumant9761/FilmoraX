import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import { BACKGROUND_LOGO } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_LOGO} alt="Logo" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
