import React, { useEffect } from 'react'
import Header from './Header';
import { API_OPTIONS } from '../utils/constant';
const Browser = () => {
const getNowPlayingMovies = async () => {
  const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS
  );
  const json = await data.json();
  console.log(json);
};
useEffect(() => {
  getNowPlayingMovies();
},[])
  return (
    <>
    <Header/>
    <img className="bg-center bg-no-repeat bg-cover w-screen" src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVDnrRqvtC6x8hD62R0mY9cwgf2MX7jE2zifHpJPcq6dhEVIVcHrPD8nV5G80Rff7lBjHTWDjVgZiZaMYfKPW78ydxg4F6XZ44wN.webp?r=dc8" alt="" />
    </>
  )
}

export default Browser
