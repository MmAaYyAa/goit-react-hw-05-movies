import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({movies}) => {
const location = useLocation();

  return (
    <div>
        {movies.map(({title, id})=>(
            <li key={id}>
                <Link to={`/movies/${id}`} state={{from: location}} >
                  <h3>{title}</h3>
                  </Link>
            </li>
        ))}
    </div>
  );
};

export default MoviesList