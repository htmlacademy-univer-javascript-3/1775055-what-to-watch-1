import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';

type ReviewFormProps = {
  id: number
};

function ReviewForm({id}:ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(evt:FormEvent<HTMLFormElement>) =>{
        evt.preventDefault();
        dispatch(postReviewAction({comment, rating, id}));
        navigate(`/films/${id}`);
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          <input className="rating__input" id="star-10" type="radio" name="rating" defaultValue={10} onClick={(evt)=> {setRating(Number(evt.currentTarget.value));}}/>
          <label className="rating__label" htmlFor="star-10">Rating 10</label>
          <input className="rating__input" id="star-9" type="radio" name="rating" defaultValue={9} onClick={(evt)=> {setRating(Number(evt.currentTarget.value));}}/>
          <label className="rating__label" htmlFor="star-9">Rating 9</label>
          <input className="rating__input" id="star-8" type="radio" name="rating" defaultValue={8} onClick={(evt)=> {setRating(Number(evt.currentTarget.value));}}/>
          <label className="rating__label" htmlFor="star-8">Rating 8</label>
          <input className="rating__input" id="star-7" type="radio" name="rating" defaultValue={7} onClick={(evt)=> {setRating(Number(evt.currentTarget.value));}}/>
          <label className="rating__label" htmlFor="star-7">Rating 7</label>
          <input className="rating__input" id="star-6" type="radio" name="rating" defaultValue={6} onClick={(evt)=> {setRating(Number(evt.currentTarget.value));}}/>
          <label className="rating__label" htmlFor="star-6">Rating 6</label>
          <input className="rating__input" id="star-5" type="radio" name="rating" defaultValue={5} onClick={(evt)=> {setRating(Number(evt.currentTarget.value));}}/>
          <label className="rating__label" htmlFor="star-5">Rating 5</label>
          <input className="rating__input" id="star-4" type="radio" name="rating" defaultValue={4} onClick={(evt)=> {setRating(Number(evt.currentTarget.value));}}/>
          <label className="rating__label" htmlFor="star-4">Rating 4</label>
          <input className="rating__input" id="star-3" type="radio" name="rating" defaultValue={3} onClick={(evt)=> {setRating(Number(evt.currentTarget.value));}}/>
          <label className="rating__label" htmlFor="star-3">Rating 3</label>
          <input className="rating__input" id="star-2" type="radio" name="rating" defaultValue={2} onClick={(evt)=> {setRating(Number(evt.currentTarget.value));}}/>
          <label className="rating__label" htmlFor="star-2">Rating 2</label>
          <input className="rating__input" id="star-1" type="radio" name="rating" defaultValue={1} onClick={(evt)=> {setRating(Number(evt.currentTarget.value));}}/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text" id="review-text"
          placeholder="Review text" defaultValue={''}
          onChange={(evt)=>{setComment(evt.target.value);}}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" {...(comment.length < 50 || rating === 0 ? {disabled: true} : {disabled: false})}>Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
