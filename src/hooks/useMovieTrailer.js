import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

// fetch movie trailer && updating the store with trailer video data
const useMovieTrailer = (movieId) => {
   const dispatch = useDispatch();
const getMovieTrailer = async() => {

   const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
   const json = await data.json();
   const filterData = json.results.filter((video) => video.type === "Trailer");
   const movieTrailer = filterData.length ? filterData[0] : json.results[0];
   dispatch(addTrailerVideo(movieTrailer));
} 
useEffect(() => {
getMovieTrailer();
},[])
}
export default useMovieTrailer;