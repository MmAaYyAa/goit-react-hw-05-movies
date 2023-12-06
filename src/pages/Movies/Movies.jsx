import React, { useEffect, useState }  from 'react';
import{getMovieBySearch} from 'api';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { Notify } from 'notiflix';
import { useSearchParams,} from 'react-router-dom';

const Movies = () => {
  const[searchQuery,setSearchQuery]= useState('');
  const[searchedMovies,setSearchedMovies]=useState([]);
  const [searchParams,setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
 
  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  useEffect (() => {
    if(!searchQuery){
      return;
    }

    const getSearchedMovies = async () => {
      try {
        const{results}=await getMovieBySearch(searchQuery);
        if(!results.length){
          Notify.failure('Sorry,nothing was found for your request.Please,try again.');
          return;
        }
        if(results.length>0){
          setSearchedMovies(results);
        }
      } catch(error){
        console.log(error.message);
      }
    };
    getSearchedMovies();
  },[searchQuery]);

  const handleFormSubmit = searchQuery => {
    setSearchedMovies([]);
    //setSearchQuery(searchQuery);
    setSearchParams({ query: searchQuery });
  }
  
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {searchedMovies && searchedMovies.length > 0 && (
        <MoviesList
          movies={searchedMovies}
          setSearchedMovies={setSearchedMovies}
        ></MoviesList>
      )}
    </>
  );
}

export default Movies