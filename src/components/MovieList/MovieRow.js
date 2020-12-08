import React from 'react';
import './MovieRow.css';


function MovieRow({ movie }) {


    return ( 
        <tr className = "row-item" >
            <td className="id" > { movie.id } </td> 
            <td > { movie.title } </td>  
            <td > { movie.description } </td> 
        </tr >
    );
}

export default MovieRow;