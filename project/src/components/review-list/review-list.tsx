import ReviewColumn from '../review-column/review-column';
import { review } from '../../types/review';


type ReviewListProps = {
  reviews: review[]
}

function ReviewList({reviews}:ReviewListProps) {
  const halfReviews = Math.ceil(reviews.length / 2);
  const firstReviewCol = reviews.filter((rev) => rev.id <= Math.ceil(halfReviews));
  const secondReviewCol = reviews.filter((rev) => rev.id > Math.ceil(halfReviews));
  return (
    <div className="film-card__reviews film-card__row">
      <ReviewColumn reviews = {firstReviewCol}/>
      <ReviewColumn reviews = {secondReviewCol}/>
    </div>
  );
}

export default ReviewList;
