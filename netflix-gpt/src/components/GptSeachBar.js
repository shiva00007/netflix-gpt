import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LanguageConstant";
import genai from "../utils/genai";
import { api_options } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
const GptSeachBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const serachText = useRef(null);
  const dispatch = useDispatch();

  const searchTmdbMovie = async (moviename) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        moviename +
        "&include_adult=false&language=en-US&page=1",
      api_options
    );
    const json = await data.json();

    return json.results;
  };

  const handleSearchResults = async () => {
    let gptMovies; // Declare gptMovies variable

    try {
      console.log(serachText.current.value);

      // Create the GPT query
      const gptQuery =
        "act as a movie recommendation system and suggest some movies from a query " +
        serachText.current.value +
        " only give me names for 5 movies, comma-separated like the example result given ahead. Example Don,billa,Msdhone,petta,kuruvi";

      // Initialize the model
      const model = genai.getGenerativeModel({ model: "gemini-pro" });

      // Generate content
      const result = await model.generateContent(gptQuery);

      const response = await result.response;
      const text = response.candidates[0].content.parts[0].text;

      gptMovies =
        response.candidates?.[0]?.content?.parts?.[0]?.text?.split(",");
      // console.log(gptMovies);

      // console.log("GPT Movies:", gptmovies);
    } catch (error) {
      console.error("Failed to fetch search results:", error);
      return; // Exit the function early if an error occurs
    }

    //to Search all Movie list
    if (!gptMovies) {
      console.log("No movie recommendations found.");
      return; // Exit the function if gptMovies is not defined
    }

    const data = gptMovies.map((movie) => searchTmdbMovie(movie));
    const tmdpResults = await Promise.all(data);
    dispatch(
      addGptMovieResults({ movieName: gptMovies, movieResult: tmdpResults })
    );
    console.log(tmdpResults);
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        ref={serachText}
        className=" w-full md:w-1/2 grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[langkey].gptSerachPlaceholder}
          className="p-4 m-4 col-span-9 rounded-lg"
        />
        <button
          className="px-2 py-2 m-4 bg-red-700 col-span-3 text-white rounded-lg"
          onClick={handleSearchResults}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSeachBar;
