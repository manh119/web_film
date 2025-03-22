import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchMovies = async () => {
      if (!query) {
        setMovies([]);
        setLoading(false);
        return;
      }

      try {
        // Using TMDB API - you'll need to replace with your API key
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&language=en-US&query=${encodeURIComponent(query)}&page=1`
        );
        setMovies(response.data.results);
      } catch (err) {
        setError('Failed to search movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    searchMovies();
  }, [query]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Search Results for "{query}"
      </h1>
      {movies.length === 0 ? (
        <div className="text-center text-gray-400">
          No movies found for your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                <p className="text-gray-400">{movie.release_date?.split('-')[0] || 'N/A'}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search; 