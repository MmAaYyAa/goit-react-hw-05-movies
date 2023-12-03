import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({movies}) => {
  return (
    <div>
        {movies.map(({title, id})=>(
            <li key={id}>
                <Link to={`movies/${id}`}>
                  <h3>{title}</h3>
                  </Link>
            </li>
        ))}
    </div>
  );
};

export default MoviesList