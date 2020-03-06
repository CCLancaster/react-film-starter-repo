import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

{/* <FilmListing film={TMDB.films[0].title} /> */}

function App() {
  let [movie, setMovie] = useState({});

  let selectMovie = (e, viewMovie) => {
    console.log(viewMovie);
    e.preventDefault();
    setMovie(viewMovie)
    console.log(movie);
  }

  return (
    <div className="film-library">
      <div className="film-list">
        <FilmListing films={TMDB.films} onClick={selectMovie}/>
      </div>
      <div className="film-details">
        <FilmDetails films={TMDB.films} movie={movie} />
      </div>
    </div>
  );
}

export default App;
