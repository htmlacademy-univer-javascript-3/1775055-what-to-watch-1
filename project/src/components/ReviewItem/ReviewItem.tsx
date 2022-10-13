/* eslint-disable react/no-unescaped-entities */
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
          <time className="review__date" dateTime="2016-12-24">{new Date(reviewData.date).toLocaleDateString('en')}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{reviewData.rating.toLocaleString()}</div>
    </div>
  );
}

export default ReviewItem;
