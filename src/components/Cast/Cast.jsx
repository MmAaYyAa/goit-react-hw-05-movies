import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getMovieCast} from 'api';
const BAZE_PATH = 'https://image.tmdb.org/t/p/original';
const Cast = () => {
  const [ moviesCast, setMoviesCast] = useState([]);
  const {movieId} = useParams();

  useEffect(() => {
    const getCast = async () => {
try {
  const {cast} = await getMovieCast(movieId);
  const CastInfo = () => 
   cast.map(({name, profile_path, id }) => {
    return {
      name,
      poster:  profile_path ? BAZE_PATH + profile_path : defaultImg,
      id,
    
    };
   });
   setMoviesCast(CastInfo);
} catch (error) {
  console.log(error)
}
    };
    getCast();
   
  }, [movieId]);
  
  const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
       <ul>
        {moviesCast.map(({ name, poster, id, }) => (
          <li key={id}>
            <img src={poster} width={250} alt="name" />
            <p>{name}</p>
            
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cast