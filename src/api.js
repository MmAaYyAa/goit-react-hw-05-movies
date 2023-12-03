import axios from 'axios';

axios.defaults.baseURL='https://api.themoviedb.org/3/';
axios.defaults.params={
    api_key: '8aba4e3419a44727b7eb66f35fce4fa2',
    language: 'en-US'
}

// axios.defaults.headers = {
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmQ0ZjQxMGM0ZWMwODYyNmU4OGRkODI2NTFiMTE3OCIsInN1YiI6IjY1NmEzZWNhNTY4NDYzMDBlZTExYzRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iYhBZwX53rUY3z7-sh1Tm3eSJwK0Zg0dZSk27-YoCmw',
//     'accept': 'application/json'
//   };


export const getTrendingMovies = async ()=>{
    const {data}=await axios.get('trending/movie/week');
    return data;
};

 export const getMovieBySearch = async ()=>{
     const{data}= await axios.get('search/movie',{
        params:{
            query: 'query',
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