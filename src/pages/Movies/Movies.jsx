import React, { useEffect, useState }  from 'react';
import{getMovieBySearch} from 'api';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { Notify } from 'notiflix';
import { useSearchParams,} from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const[searchedMovies,setSearchedMovies] = useState([]);
  const [searchParams,setSearchParams] = useSearchParams();
  const[isLoading,setIsLoading] = useState(false);
  const query = searchParams.get('query') ?? '';
 
  useEffect (() => {
    if(!query){
      return;
    }

    const getSearchedMovies = async () => {
      setIsLoading(true);
      try {
        const{results}=await getMovieBySearch(query);
        if(!results.length){
          Notify.failure('Sorry,nothing was found for your request.Please,try again.');
          return;
        }
        if(results.length>0){
          setSearchedMovies(results);
        }
      } catch(error){
        console.log(error.message);
      }finally {
        setIsLoading(false);
      }
    };
    getSearchedMovies();
  },[query]);

  const handleFormSubmit = query=> {
setSearchParams({query})
    setSearchedMovies([]);
  
  }
  
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}
      {searchedMovies && searchedMovies.length > 0 && (
        <MoviesList
          movies={searchedMovies}
        ></MoviesList>
      )}
    </>
  );
}

export default Movies