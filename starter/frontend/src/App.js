import React, { useState } from 'react';
// Fixed frontend API URL configuration
import MovieList from './components/MovieList';
// Fixed frontend API URL configuration
import MovieDetails from './components/MovieDetails';
// Fixed frontend API URL configuration
import './App.css';
// Fixed frontend API URL configuration

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="container">
      <h1>Movie List</h1>

      <MovieList onMovieClick={handleMovieClick} />

      {selectedMovie && (
        <>
          <h1>Movie Details</h1>
          <MovieDetails movie={selectedMovie} />
        </>
      )}
    </div>
  );
}
