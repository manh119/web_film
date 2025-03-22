import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Mock data for movies
  const mockMovies = [
    {
      id: 1,
      title: "The Adventure Begins",
      release_date: "2024-01-15",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+1",
      overview: "An epic adventure that will take you on a journey of a lifetime.",
      video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Example video URL
    },
    {
      id: 2,
      title: "Mystery in the Dark",
      release_date: "2024-02-01",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+2",
      overview: "A thrilling mystery that will keep you guessing until the end.",
      video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Love in Paris",
      release_date: "2024-02-14",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+3",
      overview: "A romantic story set in the heart of the City of Light.",
      video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Space Explorers",
      release_date: "2024-03-01",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+4",
      overview: "Journey to the stars in this sci-fi adventure.",
      video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "The Last Stand",
      release_date: "2024-03-15",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+5",
      overview: "An action-packed thriller that will keep you on the edge of your seat.",
      video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Comedy Night",
      release_date: "2024-04-01",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+6",
      overview: "A hilarious comedy that will make you laugh out loud.",
      video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 7,
      title: "Historical Drama",
      release_date: "2024-04-15",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+7",
      overview: "A powerful drama based on true events.",
      video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 8,
      title: "Animation Wonder",
      release_date: "2024-05-01",
      poster_path: "https://via.placeholder.com/500x750/1F2937/FFFFFF?text=Movie+8",
      overview: "A magical animated adventure for all ages.",
      video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockMovies.map((movie) => (
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
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <p className="text-gray-400 mb-2">{movie.release_date.split('-')[0]}</p>
              <p className="text-gray-300 text-sm line-clamp-2">{movie.overview}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home; 