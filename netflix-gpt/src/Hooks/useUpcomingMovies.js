import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  //fetch the movie data and Update the store
  const getUpcomingdMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      api_options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingdMovies();
  }, []);
};

export default useUpcomingMovies;
