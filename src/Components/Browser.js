import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from "../Components/SecondaryContainer";
const Browser = () => {
useNowPlayingMovies();
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
