/* eslint-disable react/no-unescaped-entities */
import moment from 'moment';
import { review } from '../../types/review';

type ReviewItemProps = {
  reviewData: review
}

function ReviewItem({reviewData}: ReviewItemProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{reviewData.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{reviewData.user.name}</cite>
          <time className="review__date" dateTime={moment(reviewData.date).format('LL')}>{moment(reviewData.date).format('MMMM D, YYYY')}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{reviewData.rating.toLocaleString()}</div>
    </div>
  );
}

export default ReviewItem;
