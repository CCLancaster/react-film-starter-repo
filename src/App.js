import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

{/* <FilmListing film={TMDB.films[0].title} /> */}

function App() {
  return (
    <div className="film-library">
      <div className="film-list">
        <FilmListing />
      </div>
      <div className="film-details">
        <FilmDetails />
      </div>
    </div>
  );
}

export default App;
