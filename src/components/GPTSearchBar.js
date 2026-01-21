import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
    
    const langKey = useSelector(store => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-10"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-2 m-4 bg-gradient-to-r from-gray-900 from-0% to-violet-900 to- text-white px-4 py-2 rounded-md text-sm font-semibold transition">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
