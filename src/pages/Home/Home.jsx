import React from 'react'
import {getTrendingMovies} from 'api';
import MoviesList from 'components/MoviesList/MoviesList';
import{useState, useEffect} from 'react';

const Home = () => {
  const[moviesInTrend,setMoviesInTrend]=useState([]);
  useEffect(()=>{
    const getMoviesInTrend = async()=>{
      try{
        const{results}=await getTrendingMovies();
        if(results.length>0){
          setMoviesInTrend(results);
        }
      }catch(error){
        console.log('error.message', error.message);
      }
    };
    getMoviesInTrend();
  },[]);
  return (
    <div>
      <h2>Trending Movies</h2>
      <MoviesList movies={moviesInTrend}></MoviesList>
      </div>
  );
};

export default Home