/* eslint-disable react/no-unescaped-entities */

import ReviewItem from '../review-item/review-item';
import { review } from '../../types/review';

type ReviewColumnProps = {
  reviews: review[]
}

function ReviewColumn({reviews}:ReviewColumnProps) {
  return (
    <div className="film-card__reviews-col">
      {reviews.map((reviewData, id) => {
        const keyValue = `${reviewData.user.id}`;
        return (
          <ReviewItem
            reviewData={reviewData}
            key={keyValue}
          />
        );
      })}
    </div>
  );
}

export default ReviewColumn;
