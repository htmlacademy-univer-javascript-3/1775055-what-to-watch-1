import { film } from '../../types/film';
import { review } from '../../types/review';
import ReviewList from '../review-list/review-list';

type FilmTabsProps = {
  type: 'overview'|'details'| 'reviews'
  filmData: film
  reviews: review[]
}

function FilmTabs({type, filmData, reviews}: FilmTabsProps) {
  const getTextRating = (rating:number) => {
    if(rating < 3) {
      return 'Bad';
    }
    if(3 < rating && rating < 5) {
      return 'Normal';
    }
    if(5 < rating && rating < 8) {
      return 'Good';
    }
    if(8 < rating && rating < 10) {
      return 'Very good';
    }
    if(rating === 10) {
      return 'Awesome';
    }
  };

  const getTime = (m: number) => {
    const hours = Math.floor(m / 60);
    const mins = m % 60;
    return (`${hours}h ${mins}m`);
  };

  return (
    <>
      {type === 'details' &&
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">{filmData.director}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
                {filmData.starring}
              </span>
            </p>
          </div>
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">{getTime(filmData.runTime)}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">{filmData.genre}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">{filmData.released}</span>
            </p>
          </div>
        </div>}
      {type === 'reviews' &&
        <ReviewList reviews={reviews}/>}
      {type === 'overview' &&
        <>
          <div className="film-rating">
            <div className="film-rating__score">{filmData.rating}</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">{getTextRating(filmData.rating)}</span>
              <span className="film-rating__count">{filmData.scoresCount} ratings</span>
            </p>
          </div>
          <div className="film-card__text">
            <p>{filmData.description}</p>
            <p className="film-card__director"><strong>Director: {filmData.director}</strong></p>
            <p className="film-card__starring"><strong>Starring: {filmData.starring} and other</strong></p>
          </div>
        </>}
    </>
  );
}

export default FilmTabs;
