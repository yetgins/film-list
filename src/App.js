import React from 'react';
import movies from './movies';
import FilterableMovieList from './components/FilterableMovieList';


console.log(movies);

function App() {
    return ( 
        <div className = "container" >
        <h1> FİLM LİSTESİ </h1> 
            <div>
        <FilterableMovieList movies={movies}/>  
            </div> 
        </div>
    );
}

export default App;