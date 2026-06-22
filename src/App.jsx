import { useState } from "react";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import Filtre from "./components/Filtre";
import "./app.css"

function App() {
  // État pour les films (useState obligatoire !)
  const [moviesListData, setMoviesListData] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years...",
      genre: "Drama",
      rating: 9.3,
      isOpen: true,
      src: "https://imgs.search.brave.com/p7Lv-nZH_IP3LDSG5V_vi0r4Ca2tIu0EC_MFDuhRv_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC8zL2Mv/NC8xNzE5NzMtMTky/MHgxMDgwLWRlc2t0/b3AtZnVsbC1oZC10/aGUtc2hhd3NoYW5r/LXJlZGVtcHRpb24t/YmFja2dyb3VuZC5q/cGc",
    },
    {
      id: 2,
      title: "The Godfather",
      isOpen: false,
      description: "The aging patriarch of an organized crime dynasty...",
      genre: "Crime",
      rating: 9.2,
      src: "https://4kwallpapers.com/images/wallpapers/the-godfather-movie-2048x2048-13940.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      isOpen: true,
      description: "When the menace known as the Joker wreaks havoc...",
      genre: "Action",
      rating: 9.0,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMtkGBfHb06Qfe-eI5WYVbzMZ18yHhdowsA&s",
    },
    {
      id: 4,
      title: "Pulp Fiction",
      isOpen: true,
      description: "The lives of two mob hitmen...",
      genre: "Crime",
      rating: 8.9,
      src: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/5864738/5864738-1693433608279-72a076a1d47.jpg",
    },
  ]);

  // État pour les likes (UNE SEULE FOIS !)
  const [totalLikes, setTotalLikes] = useState(0);

  // État pour les films filtrés (au début = tous les films)
  const [filteredMovies, setFilteredMovies] = useState(moviesListData);

  // Fonction appelée par Filtre quand on filtre
  const handleFilterChange = (newFilteredMovies) => {
    setFilteredMovies(newFilteredMovies);
  };

  // Fonction pour ajouter un film
  const handleAddMovie = (newMovie) => {
    const movieToAdd = {
      ...newMovie,
      id: moviesListData.length + 1,
      likes: 0,
      isOpen: true,
    };

    const updatedMovies = [...moviesListData, movieToAdd];
    setMoviesListData(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <div className="app-container">
      <Header/>
      
      <Filtre
        moviesListData={moviesListData}
        onFilterChange={handleFilterChange}
        onAddMovie={handleAddMovie}
      />

      
      <MoviesList
        moviesListData={filteredMovies}
        totalLikes={totalLikes}
        setTotalLikes={setTotalLikes}
      />

     
    </div>
  );
}

export default App;