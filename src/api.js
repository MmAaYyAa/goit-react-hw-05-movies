import axios from 'axios';

axios.defaults.baseURL='https://api.themoviedb.org/3/';
axios.defaults.params={
    api_key: '7fd4f410c4ec08626e88dd82651b1178',
    language: 'en-US'
}

export const getTrendingMovies = async ()=>{
    const {data}=await axios.get('trending/movie/week');
    return data;
};

export const getMovieBySearch = async ()=>{
    const{data}= await axios.get('search/movie',{
        params:{
            query: query,
        }
    });
    return data;
};

export const getMovieById =async(movieId)=>{
    const{data}= await axios.get(`movie/${movieId}`,{
        params:{
            append_to_response: 'poster_path'
        }
    });
    return data;
};