import React, { useState } from "react";

const MoviesList = () => {
  // Initialize state with a list of movies
  const [movies, setMovies] = useState([
    { id: 1, title: "The Dark Knight", genre: "Action", details: "A thrilling action movie about Batman." },
    { id: 2, title: "Inception", genre: "Sci-Fi", details: "A mind-bending thriller about dreams within dreams." },
    { id: 3, title: "Toy Story", genre: "Animation", details: "A heartwarming tale of toys that come to life." },
    { id: 4, title: "Die Hard", genre: "Action", details: "An iconic action movie set in a skyscraper." },
  ]);

  const [visibleDetails, setVisibleDetails] = useState({}); // To toggle movie details
  const [showAll, setShowAll] = useState(true); // To toggle view between all movies and specific genre
  const [newMovie, setNewMovie] = useState({ title: "", genre: "", details: "" }); // For adding new movies

  // Toggle movie details
  const toggleDetails = (id) => {
    setVisibleDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Remove a movie
  const removeMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  // Add a movie
  const addMovie = () => {
    if (!newMovie.title || !newMovie.genre || !newMovie.details) {
      alert("Please fill out all fields before adding a movie!");
      return;
    }
    setMovies((prevMovies) => [
      ...prevMovies,
      { id: Date.now(), ...newMovie }, // Use Date.now() to generate a unique ID
    ]);
    setNewMovie({ title: "", genre: "", details: "" }); // Clear the input fields
  };

  // Filter movies based on view
  const filteredMovies = showAll ? movies : movies.filter((movie) => movie.genre === "Action");

  return (
    <div>
      {/* Toggle view button */}
      <button onClick={() => setShowAll((prev) => !prev)}>
        {showAll ? "Show Only Action Movies" : "Show All Movies"}
      </button>

      {/* Add Movie Form */}
      <div style={{ marginTop: "20px" }}>
        <h3>Add a New Movie</h3>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Genre"
          value={newMovie.genre}
          onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Details"
          value={newMovie.details}
          onChange={(e) => setNewMovie({ ...newMovie, details: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>

      {/* Render the list of movies */}
      <ul style={{ marginTop: "20px" }}>
        {filteredMovies.map((movie) => (
          <li key={movie.id} style={{ marginBottom: "15px" }}>
            <span onClick={() => toggleDetails(movie.id)} style={{ cursor: "pointer", color: "blue" }}>
              {movie.title}
            </span>
            <button onClick={() => removeMovie(movie.id)} style={{ marginLeft: "10px" }}>
              Remove
            </button>
            {visibleDetails[movie.id] && <p>{movie.details}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
