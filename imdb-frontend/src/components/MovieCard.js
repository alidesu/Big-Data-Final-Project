import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="w-1/5 p-2">
      <div className="bg-white rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 ease-in duration-200">
        <img
          className="w-full h-full object-cover"
          src={movie.PosterSrc}
          alt={movie.Title}
        />
        <div className="px-6 py-4 text-center ">
          <div className="font-bold text-3xl mb-2 bebas-neue-regular">{movie.Title}</div>
          <p className="text-gray-700 text-base">
            <span className='noto-sans-700'>IMDb Rating:</span> {movie['IMDb Rating']}
          </p>
          <p className="text-gray-700 text-base">
          <span className='noto-sans-700'>Year:</span> {movie.Year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
