import React from "react";
import { useSelector } from "react-redux";
import Movielist from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieName, movieResult } = useSelector((store) => store.gpt);
  if (!movieName) return null;
  return (
    <div className="p-4 m-4 bg-black opacity-90">
      <div>
        {movieName.map((movieName, index) => (
          <Movielist
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
