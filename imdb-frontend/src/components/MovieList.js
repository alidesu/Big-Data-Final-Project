import React, { useState } from 'react';

const MovieList = ({ movies }) => {
  const [numMoviesShown, setNumMoviesShown] = useState(10);

  const handleShowMoreMovies = () => {
    setNumMoviesShown(numMoviesShown + 10);
  };

  const getDirectorString = (director) => {
    if (Array.isArray(director)) {
      return director.join(', ');
    } else {
      return director;
    }
  };

  const getCastString = (cast) => {
    if (Array.isArray(cast)) {
      return cast.join(', ');
    } else {
      return cast;
    }
  };

  return (
    <div className="movie-list">
      <h2 className="text-4xl font-bold mb-10 mt-10 text-center">All Movies</h2>
      <div className="grid grid-cols-5 gap-6">
        {movies.slice(0, numMoviesShown).map((movie, index) => (
          <div
            key={index}
            className=" movie-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-out hover:scale-105"
          >
            <div className="h-auto w-auto">
              <img
                src={movie.image_src}
                alt={movie.movie_name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-3xl font-bold mb-2 bebas-neue-regular">{movie.movie_name}</h3>
              <p className="text-gray-600 mb-2">
                <strong className='noto-sans-700'>Director:</strong> <span className='noto-sans-400'>{getDirectorString(movie.director)}</span>
              </p>
              {/* <p className="text-gray-600 mb-2">
                <strong>Cast:</strong> {getCastString(movie.cast)}
              </p> */}
              <p className="text-gray-600 mb-2 ">
                <strong className='noto-sans-700'>Rating:</strong> <span className='noto-sans-400'>{movie.rating}</span>
              </p>
              <p className="text-gray-600 mb-2">
                <strong className='noto-sans-700'>Year:</strong> <span className='noto-sans-400'>{movie.year}</span>
              </p>
              <p className="text-gray-600">
                <strong className='noto-sans-700'>Genre:</strong> <span className='noto-sans-400'>{movie.genre}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {numMoviesShown < movies.length && (
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 mb-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleShowMoreMovies}
          >
            Show 10 More
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieList;
