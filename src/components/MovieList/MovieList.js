import React from 'react';
import MovieDescriptionRow from './MovieDescriptionRow';
import MovieRow from './MovieRow';
import './MovieList.css';

function MovieList({ movies }) {
    const getDescriptions = () => {
        const descriptions = [];
        movies.forEach((movie) => {
            if (!descriptions.includes(movie.description)) {
                descriptions.push(movie.description);
            }
        });
        return descriptions;
    }

    return (

            <table className = "movie-table" >
                <thead>
                    <tr>
                        <th> Id </th> 
                        <th> Title </th>  
                        <th> Description </th> 
                    </tr > 
                </thead> 
                <tbody> {
                getDescriptions().map((description) => ( 
                    <>
                        <MovieDescriptionRow description = { description }/> 
                        {movies
                        .filter((movie) => movie.description === description)
                        .map((movie) => ( 
                            <MovieRow movie = { movie }/>
                        ))
                    } 
                    </>
                ))
        } 
                </tbody> 
            </table>
);
}

export default MovieList;