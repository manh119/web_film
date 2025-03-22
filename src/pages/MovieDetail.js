import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // Using TMDB API - you'll need to replace with your API key
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=en-US`
        );
        setMovie(response.data);
      } catch (err) {
        setError('Failed to fetch movie details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

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

  if (!movie) {
    return (
      <div className="text-center text-white p-4">
        Movie not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
              {movie.vote_average.toFixed(1)} / 10
            </span>
            <span className="text-gray-400">
              {movie.release_date.split('-')[0]}
            </span>
            <span className="text-gray-400">
              {movie.runtime} minutes
            </span>
          </div>
          <p className="text-gray-300 mb-6">{movie.overview}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Genres</h2>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gray-700 text-white px-3 py-1 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Production Companies</h2>
            <div className="flex flex-wrap gap-2">
              {movie.production_companies.map((company) => (
                <span
                  key={company.id}
                  className="bg-gray-700 text-white px-3 py-1 rounded-full"
                >
                  {company.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail; 