import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Watch() {
  const { id } = useParams();
  
  // Mock data - in a real app, you would fetch this from your API
  const mockMovies = [
    {
      id: 1,
      title: "The Adventure Begins",
      release_date: "2024-01-15",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+1",
      overview: "An epic adventure that will take you on a journey of a lifetime.",
      video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Mystery in the Dark",
      release_date: "2024-02-01",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+2",
      overview: "A thrilling mystery that will keep you guessing until the end.",
      video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Love in Paris",
      release_date: "2024-02-14",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+3",
      overview: "A romantic story set in the heart of the City of Light.",
      video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Space Explorers",
      release_date: "2024-03-01",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+4",
      overview: "Journey to the stars in this sci-fi adventure.",
      video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "The Last Stand",
      release_date: "2024-03-15",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+5",
      overview: "An action-packed thriller that will keep you on the edge of your seat.",
      video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const movie = mockMovies.find(m => m.id === parseInt(id)) || mockMovies[0];
  
  // Get recommended movies (excluding the current movie)
  const recommendedMovies = mockMovies.filter(m => m.id !== parseInt(id));

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/" 
        className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6"
      >
        <svg 
          className="w-5 h-5 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
        Back to Movies
      </Link>

      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl mb-8">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={movie.video_url}
            title={movie.title}
            className="w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-300 mb-4">{movie.overview}</p>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full flex items-center">
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              Play
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full flex items-center">
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
              Add to Favorites
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Movies Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Recommended Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendedMovies.map((movie) => (
            <Link
              to={`/watch/${movie.id}`}
              key={movie.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200 cursor-pointer"
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
                <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
                <p className="text-gray-400 mb-2">{movie.release_date.split('-')[0]}</p>
                <p className="text-gray-300 text-sm line-clamp-2">{movie.overview}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watch; 