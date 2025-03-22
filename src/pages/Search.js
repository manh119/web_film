import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Mock movie data
  const allMovies = [
    {
      id: 1,
      title: "The Adventure Begins",
      release_date: "2024-01-15",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+1",
      overview: "An epic adventure that will take you on a journey of a lifetime.",
      genres: ["Adventure", "Action"]
    },
    {
      id: 2,
      title: "Mystery in the Dark",
      release_date: "2024-02-01",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+2",
      overview: "A thrilling mystery that will keep you guessing until the end.",
      genres: ["Mystery", "Thriller"]
    },
    {
      id: 3,
      title: "Love in Paris",
      release_date: "2024-02-14",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+3",
      overview: "A romantic story set in the heart of the City of Light.",
      genres: ["Romance", "Drama"]
    },
    {
      id: 4,
      title: "Space Explorers",
      release_date: "2024-03-01",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+4",
      overview: "Journey to the stars in this sci-fi adventure.",
      genres: ["Sci-Fi", "Adventure"]
    },
    {
      id: 5,
      title: "The Last Stand",
      release_date: "2024-03-15",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+5",
      overview: "An action-packed thriller that will keep you on the edge of your seat.",
      genres: ["Action", "Thriller"]
    }
  ];

  useEffect(() => {
    const performSearch = () => {
      setLoading(true);
      // Simulate API delay
      setTimeout(() => {
        const results = allMovies.filter(movie => {
          const searchTerm = query.toLowerCase();
          return (
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.overview.toLowerCase().includes(searchTerm) ||
            movie.genres.some(genre => genre.toLowerCase().includes(searchTerm))
          );
        });
        setSearchResults(results);
        setLoading(false);
      }, 500);
    };

    if (query) {
      performSearch();
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {query ? `Search Results for "${query}"` : 'Search Movies'}
        </h1>
        {query && (
          <p className="text-gray-400">
            Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}
          </p>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.map((movie) => (
            <Link
              to={`/watch/${movie.id}`}
              key={movie.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200"
            >
              <div className="relative">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 flex items-center justify-center transition-opacity duration-200">
                  <span className="text-white text-lg font-bold opacity-0 hover:opacity-100">Watch Now</span>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                <div className="flex flex-wrap gap-2 mb-2">
                  {movie.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-700 text-gray-300 px-2 py-1 rounded"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 mb-2">{movie.release_date.split('-')[0]}</p>
                <p className="text-gray-300 text-sm line-clamp-2">{movie.overview}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : query ? (
        <div className="text-center text-gray-400 py-12">
          <p className="text-xl mb-2">No movies found matching "{query}"</p>
          <p>Try adjusting your search terms or browse our movie collection</p>
        </div>
      ) : (
        <div className="text-center text-gray-400 py-12">
          <p className="text-xl mb-2">Start searching for movies</p>
          <p>Enter a movie title, genre, or keywords in the search bar above</p>
        </div>
      )}
    </div>
  );
}

export default Search; 