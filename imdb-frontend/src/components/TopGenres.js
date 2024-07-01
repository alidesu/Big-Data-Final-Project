import React from 'react';

const TopGenres = ({ genres }) => (
  <div className="container mx-auto my-8 p-4">
    <h2 className="text-2xl font-bold gilda-display mb-4 text-center border-b-2 pb-2">Top 5 Genres</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {Object.entries(genres).map(([genre, info], index) => (
        <div 
          key={index} 
          className="bg-white shadow-lg border rounded-lg p-4 m-2 transition-transform transform hover:scale-105"
        >
          <div className="font-semibold text-xl mb-2">{genre}</div>
          <p className="text-gray-600 text-sm">Number of Movies: <span className="font-medium">{info.count}</span></p>
          <p className="text-gray-600 text-sm">Average IMDb Rating: <span className="font-medium">{info.avg_rating.toFixed(1)}</span></p>
          <div className="mt-4">
            <p className="font-semibold mb-1">Highest Rated Movie:</p>
            <div className="flex items-center">
              <img 
                className="w-16 h-24 object-cover rounded-lg shadow-md" 
                src={info.highest_rated_movie.poster_src} 
                alt={info.highest_rated_movie.title} 
              />
              <div className="ml-4">
                <p className="text-gray-700 text-sm font-medium">{info.highest_rated_movie.title} ({info.highest_rated_movie.year})</p>
                <p className="text-gray-700 text-sm">IMDb Rating: {info.highest_rated_movie.rating}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TopGenres;
