import React from 'react'
import { Link } from 'react-router-dom'
const Movies = () => {
    // useEffect(()=>{
  //   HTTP 
  // },[])
  return (
    <div>
      {['movie-1','movie-2'].map(movie=>{
        return (<Link key={movie} to={`${movie}`}>{movie}</Link>
        );
      })}
    </div>
  )
}

export default Movies