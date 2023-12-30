import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  
  return (
    <div className='trailer w-screen'><iframe         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    className='w-screen aspect-video controls' src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player"></iframe></div>
  )
}

export default VideoBackground