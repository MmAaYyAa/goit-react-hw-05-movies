import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getMovieById} from 'api';

const BASE_PATH ="http://image.tmdb.org/t/p/original";

const MovieDetails = () => {
  const {movieId}=useParams();

  const[title,setTitle]=useState('');
  const[releaseDate,setReleaseDate]=useState();
  const[genres,setGenres]=useState([]);
  const[overview,setOverview]=useState('');
  const[userScore,setUserScore]=useState();
  const[poster,setPoster]=useState('');

   useEffect(()=>{
  const getSearchedMovie =async()=>{
    try{
      const{
        poster_path,
        title,
        popularity,
        overview,
        release_date,
        genres,
      }= await getMovieById(movieId);

      setPoster(BASE_PATH+poster_path);
      setTitle(title);
      setReleaseDate(release_date);
      setUserScore(popularity);
      setOverview(overview);
      setGenres(genres);
    }catch(error){
      console.log('error.message', error.message);
    }
  };
  getSearchedMovie();
   },[movieId])

  return (
    <div>
      <div>
      <img src={poster} alt={title} />
      </div>
      <h3>{title} ({releaseDate})</h3>
      <p>User Score: {userScore}</p>
      <h4>Overview</h4>
       <p>{overview}</p> 
      <h4>Genres</h4>
      <ul>
        {genres.map(genre=>(
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails