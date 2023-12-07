
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getMovieReviews} from 'api';
import {List} from './Reviews.styled';

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
      <List>
        {reviews.length > 0 ? (
          reviews.map(({ author, id, content }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </List>
    </div>
  )
}

export default Reviews