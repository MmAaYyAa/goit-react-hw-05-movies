
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getMovieReviews} from 'api';

const Reviews = () => {
  const [reviews,setReviews] = useState([]);
  const {movieId} = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const {results} = await getMovieReviews(movieId);
        const reviewsList = () =>
        results.map(({author, id, content}) =>{
          return {
            author,
            id,
            content,
          };
        });
       setReviews(reviewsList)
      } catch (error) {
        console.log(error)
      }
    }
    getReviews();
  }, [movieId])
  
  return (
    <div>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ author, id, content }) => (
            <li key={id}>
              <p>Autor: {author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </div>
  )
}

export default Reviews