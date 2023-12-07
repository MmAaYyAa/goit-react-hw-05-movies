import React, { useState,useEffect, Suspense   } from 'react';
import { useParams,Outlet,NavLink,useLocation  } from 'react-router-dom';
import {getMovieById} from 'api';
import {LinkBack, Img, Container, MovieInfo, MovieTitle, InfoTitle, P, AddInfo, InfoDiv} from './MovieDetails.styled'
const BASE_PATH ="http://image.tmdb.org/t/p/w500";

const MovieDetails = () => {
  const {movieId} = useParams();

  const [title,setTitle] = useState('');
  const [releaseDate,setReleaseDate] = useState();
  const [genres,setGenres] = useState([]);
  const [overview,setOverview] = useState('');
  const [userScore,setUserScore] = useState();
  const [poster,setPoster] = useState('');

const location = useLocation();
const linkBack = location?.state?.from ?? '/';

   useEffect(() => {
  const getSearchedMovie = async () => {
    try{
      const{
        poster_path,
        title,
        popularity,
        overview,
        release_date,
        genres,
      } = await getMovieById(movieId);

      setPoster(BASE_PATH+poster_path);
      setTitle(title);
      setReleaseDate(release_date);
      setUserScore(`${Math.round(popularity / 10)}%`);
      setOverview(overview);
      setGenres(genres);
    } catch(error) {
      console.log('error.message', error.message);
    }
  };
  getSearchedMovie();
   },[movieId])

  return (
    <Container>
      <LinkBack to={linkBack}>Back</LinkBack>
      <MovieInfo>
      <Img src={poster} alt={title} />
      <div>
      <MovieTitle>{title} ({releaseDate})</MovieTitle>
      <P>User Score: {userScore}</P>
      <InfoTitle>Overview</InfoTitle>
       <P>{overview}</P> 
      <InfoTitle>Genres</InfoTitle>
      <P>
        {genres.map(({name}) => name).join(', ')}
      </P>
      </div>
      </MovieInfo>
      <InfoDiv>
      <InfoTitle>Additional information</InfoTitle>
      <ul>
        <li>
          <AddInfo to={`/movies/${movieId}/cast`}>Cast</AddInfo>
          </li>
        <li>
        <AddInfo to={`/movies/${movieId}/reviews`}>Reviews</AddInfo>
        </li>
      </ul>
      </InfoDiv>
      <Suspense fallback={<div>Loading...</div>}>
      <Outlet/>
      </Suspense>
    </Container>
  );
};

export default MovieDetails