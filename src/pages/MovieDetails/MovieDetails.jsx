import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const {movieId}=useParams();
  // useEffect(()=>{
  //   HTTP 
  // },[])

  return (
    <div>MovieDetails:{movieId}</div>
  )
}

export default MovieDetails