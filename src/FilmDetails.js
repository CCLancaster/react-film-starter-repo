import React from 'react';
import FilmPoster from './FilmPoster';

function FilmDetails(props) {
    return(
        <div>
            <FilmPoster films={props.films} movie={props.movie} />
        </div>
    )
}

export default FilmDetails;