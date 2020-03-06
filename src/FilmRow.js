import React from 'react';

function FilmRow(props) {
    return (
        <div>
            <div>
            <h1>Films</h1>
            </div>
            <div className="div-row">   
             {props.films.map((film, i) => (
                 <div>
                    <img src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`}></img>
                    <h1 key={`film-${i}`} onClick={(e) => {props.onClick(e, film);}}>{film.title}</h1>
                    <p>{film.release_date.split("-")[0]}</p>
                </div>
                ))}
            </div>
        </div>

    )
}

export default FilmRow;