import { useDispatch } from "react-redux";
import { api_options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //fetch the trailervideo & update the store with trailervideo
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      api_options
    );
    const json = await data.json();
    console.log(json);

    const filter_trailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filter_trailer.length ? filter_trailer[1] : json.results[0]; //to handle not video in Present
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
