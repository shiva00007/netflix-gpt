import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;
  return (
    <div className="w-48 mx-2  hover:scale-110 hover:shadow-lg transition duration-200 rounded-lg">
      <img src={IMAGE_CDN_URL + posterpath} alt="moviecard" />
    </div>
  );
};

export default MovieCard;
