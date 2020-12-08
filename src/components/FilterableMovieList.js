import React from 'react';
import MovieList from './MovieList/MovieList';

  const FilterableMovieList =({movies})=> {

      function compare( a, b ) {
        if ( a.description < b.description ){
            return -1;
        }
        if ( a.description > b.description ){
            return 1;
        }
        return 0;
    };

        const getSortedMovies = () => {
            const sortedMovies = movies.sort(compare);

            return sortedMovies;
        }
    return (
        <>
            
            <MovieList movies={getSortedMovies()} />
        </>
      );
  };

  export default FilterableMovieList;