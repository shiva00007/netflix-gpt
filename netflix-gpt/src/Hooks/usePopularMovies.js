import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();

  //fetch the movie data and Update the store
  const getPopularplayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      api_options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularplayingMovies();
  }, []);
};

export default usePopularMovies;
