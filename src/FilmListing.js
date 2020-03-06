import React from 'react';
import FilmRow from './FilmRow';

function FilmListing(props) {
    return (
         <div className="film-row">
             <FilmRow films={props.films} onClick={props.onClick} />
         </div>
    )
}

export default FilmListing;