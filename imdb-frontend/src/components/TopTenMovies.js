import React from 'react';
import MovieCard from './MovieCard';

const TopTenMovies = ({ movies }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold gilda-display-bold border-b-2 pb-2 pt-5 mb-4 text-center">Top 10 Movies Of All The Time</h2>
      <div className="flex flex-wrap justify-center">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopTenMovies;