import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({movies}) => {
const location = useLocation();
const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
        {movies.map(({title, id, poster_path})=>(
            <li key={id}>
                <Link to={`/movies/${id}`} state={{from: location}} >
                  <h3>{title}</h3>
                  </Link>
                  <img
              src={poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            </li>
        ))}
    </div>
  );
};

export default MoviesList