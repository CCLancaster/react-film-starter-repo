import React from 'react';

function FilmPoster(props) {
    
    return (
        <div>
            <h1>This is where the details are held</h1>
            <img src={`https://image.tmdb.org/t/p/w780/${props.movie.backdrop_path}`} width="100%" ></img>
            <p>{props.movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w780/${props.movie.poster_path}`} height="200px" width="50px"></img>
        </div>
    )
}

export default FilmPoster;