import React from 'react';
import {  useLocation } from 'react-router-dom';
import {List, Item, Img, Title, StyledLink} from './MoviesList.styled'
const MoviesList = ({movies}) => {
const location = useLocation();
const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <List>
        {movies.map(({title, id, poster_path})=>(
            <Item key={id}>
                <StyledLink to={`/movies/${id}`} state={{from: location}} >
                  <Title>{title}</Title>
                 <Img
                   src={poster_path
                   ? `https://image.tmdb.org/t/p/w500${poster_path}`
                   : defaultImg
                   }
                   width={250}
                   alt="poster"
                 />
               </StyledLink>
           </Item>
        ))}
    </List>
  );
};

export default MoviesList