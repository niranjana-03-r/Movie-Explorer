import { useState } from "react";
import "./App.css";

const moviesData = [
  {
    id: 1,
    title: "Inception",
    year: "2010",
    rating: "8.8",
    category: "Action",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description: "A skilled thief who steals secrets through dreams is given a difficult mission that could change his life."
  },
  {
    id: 2,
    title: "Interstellar",
    year: "2014",
    rating: "8.7",
    category: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "A group of explorers travel through a wormhole in space to find a new home for humanity."
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: "2008",
    rating: "9.0",
    category: "Action",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman faces a dangerous criminal mastermind who creates chaos across Gotham City."
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    year: "2019",
    rating: "8.4",
    category: "Action",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "The Avengers come together for one final mission to reverse the destruction caused by Thanos."
  },
  {
    id: 5,
    title: "The Hangover",
    year: "2009",
    rating: "7.7",
    category: "Comedy",
    poster: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    description: "Three friends wake up after a wild night in Las Vegas and try to figure out what happened."
  },
  {
    id: 6,
    title: "Titanic",
    year: "1997",
    rating: "7.9",
    category: "Romance",
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx1kGJ8JqT4eYj.jpg",
    description: "A young couple from different social backgrounds fall in love aboard the famous Titanic."
  },
  {
    id: 7,
    title: "The Conjuring",
    year: "2013",
    rating: "7.5",
    category: "Horror",
    poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    description: "Paranormal investigators help a family experiencing terrifying events in their new home."
  },
  {
    id: 8,
    title: "Forrest Gump",
    year: "1994",
    rating: "8.8",
    category: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    description: "Forrest Gump experiences remarkable moments throughout his life while staying true to himself."
  }
];

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = moviesData.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      movie.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <nav className="navbar">
        <h1>🎬 Movie Explorer</h1>

        <div className="nav-links">
          <span>Home</span>
          <span>Movies</span>
          <span>Favorites</span>
        </div>
      </nav>

      <section className="hero">
        <h2>Discover Your Next Favorite Movie 🍿</h2>

        <p>Search and explore movies, ratings and details.</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>Search</button>
        </div>
      </section>

      <section className="categories">
        <h2>Browse Categories</h2>

        <div className="category-buttons">
          {["All", "Action", "Comedy", "Drama", "Horror", "Romance"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            )
          )}
        </div>
      </section>

      <section className="movies">
        <h2>Suggested Movies</h2>

        {filteredMovies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          <div className="movie-grid">
            {filteredMovies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img src={movie.poster} alt={movie.title} />

                <h3>{movie.title}</h3>

                <p>📅 {movie.year}</p>

                <p>⭐ {movie.rating}</p>

                <p>{movie.category}</p>

                <button onClick={() => setSelectedMovie(movie)}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {selectedMovie && (
        <div className="details-overlay">
          <div className="details-box">
            <button
              className="close-button"
              onClick={() => setSelectedMovie(null)}
            >
              ✕
            </button>

            <img
              src={selectedMovie.poster}
              alt={selectedMovie.title}
            />

            <div className="details-content">
              <h2>{selectedMovie.title}</h2>

              <p>📅 Release Year: {selectedMovie.year}</p>

              <p>⭐ Rating: {selectedMovie.rating}</p>

              <p>🎭 Category: {selectedMovie.category}</p>

              <p>{selectedMovie.description}</p>

              <button onClick={() => setSelectedMovie(null)}>
                Back to Movies
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;