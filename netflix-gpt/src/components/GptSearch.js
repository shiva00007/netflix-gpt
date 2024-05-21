import React from "react";
import GptSeachBar from "./GptSeachBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="w-full" src={BG_URL} alt="logo" />
      </div>
      <GptSeachBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
