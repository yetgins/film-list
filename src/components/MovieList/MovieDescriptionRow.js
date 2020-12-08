import React from 'react';
import './MovieDescriptionRow.css';

function MovieDescriptionRow({description}) {
    return (
       <tr className="description-item">
           <td colSpan={3}> {description}</td>
       </tr>
    );
}

export default MovieDescriptionRow;
