import React from "react";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  //early return
  if (!movies) return;

  const mainmovie = movies[6];
  // console.log(mainmovie);

  const { original_title, overview, id } = mainmovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0 ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
