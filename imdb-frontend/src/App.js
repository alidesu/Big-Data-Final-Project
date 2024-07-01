import React, { useState, useEffect } from "react";
import axios from "axios";
import TopTenMovies from "./components/TopTenMovies";
import TopGenres from "./components/TopGenres";
import RatingDistribution from "./components/RatingDistribution";
import YearlyTrend from "./components/YearlyTrend";
import LoadingScreen from "./components/LoadingScreen";
import MovieList from "./components/MovieList";

let IMDbLogo =
  "https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/data") // Replace with the correct path to your JSON file
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching movies data:", error));
  }, []);

  if (loading)
    return <LoadingScreen setLoading={setLoading} setData={setData} />;

  return (
    <div className="App container mx-auto px-4">
      <div className="flex items-center justify-center mt-10 mb-6">
        <img src={IMDbLogo} alt="IMDb Logo" className="w-48 h-28 mr-4" />
        <h2 className="text-8xl font-bold text-center bebas-neue-regular">
          Dashboard
        </h2>
      </div>
      {console.log(data)}
      {data && (
        <>
          {data.topTenMovies && <TopTenMovies movies={data.topTenMovies} />}
          {data.topFiveGenres && <TopGenres genres={data.topFiveGenres} />}
          {data.ratingDistribution && (
            <RatingDistribution ratings={data.ratingDistribution} />
          )}
          {data.yearlyTrend && <YearlyTrend trend={data.yearlyTrend} />}
          {data.movieList && <MovieList movies={data.movieList} />}
        </>
      )}
    </div>
  );
}

export default App;
