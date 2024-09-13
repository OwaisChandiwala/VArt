import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US'
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const firstNineMovies = movies.slice(0, 9);
  const nextNineMovies = movies.slice(9, 18);

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`); 
  };

  return (
    <div className="home">
      <h1 className="main-heading">Movies</h1>
      <div className="movies-container">
        <div className="movie-images">
          {firstNineMovies.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
              onClick={() => handleMovieClick(movie.id)} 
            />
          ))}
        </div>
      </div>
      <div className="carousel-container">
        <Carousel interval={3000}>
          {nextNineMovies.map((movie) => (
            <Carousel.Item key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="carousel-image"
                onClick={() => handleMovieClick(movie.id)} // Pass movie ID on click
              />
              <Carousel.Caption>
                <h3>{movie.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
