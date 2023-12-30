import React from 'react';
import MovieCard from './MovieCard'

const MovieList = (props) => {
  const {title, movies} = props;
  return (
    <div>
    <h1 className='ml-16 py-4 z-10 tracking-wider text-lg '>{title}</h1>
    <div className='flex overflow-hidden overflow-x-hidden pl-12'>
    <div className='flex ml-4 gap-4'>
    {movies?.map((movie) => (
      <MovieCard key={movie.id} posterPath={movie?.poster_path}/>
      ))}
      </div>
    </div>
    </div>
  )
}

export default MovieList