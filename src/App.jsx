// src/App.jsx

import React from "react";
import UserProfile from "./components/UserProfile"; // Adjust path if different
import MoviesList from "./components/MoviesList"; // Adjust path if different

function App() {
  return (
    <div>
      <header>
        <h1>React Assignments</h1>
      </header>
      <main>
        {/* UserProfile Component */}
        <section>
          <h2>User Profile</h2>
          <UserProfile />
        </section>

        {/* MoviesList Component */}
        <section>
          <h2>Favorite Movies</h2>
          <MoviesList />
        </section>
      </main>
    </div>
  );
}

export default App;
