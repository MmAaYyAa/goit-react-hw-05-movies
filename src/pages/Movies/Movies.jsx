import React, { useEffect, useState }  from 'react';
import{getMovieBySearch} from 'api';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { Notify } from 'notiflix';


const Movies = () => {
  const[searchQuery,setSearchQuery]= useState('');
  const[searchedMovies,setSearchedMovies]=useState([]);
  
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
    setSearchQuery(searchQuery);
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