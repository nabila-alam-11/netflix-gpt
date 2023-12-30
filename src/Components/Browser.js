import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from "../Components/SecondaryContainer";
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browser = () => {
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();
  return (
    <>
    <Header/>
     <MainContainer/>
     <SecondaryContainer/>
    <div>
    </div>
    </>
  )
}

export default Browser
