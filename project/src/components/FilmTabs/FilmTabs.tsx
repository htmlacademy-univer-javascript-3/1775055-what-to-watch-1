import { film } from '../../types/film';
import { review } from '../../types/review';
import ReviewList from '../ReviewList/ReviewList';

type FilmTabsProps = {
  type: 'overview'|'details'| 'reviews'
  filmData: film
  reviews: review[]
}

function FilmTabs({type, filmData, reviews}: FilmTabsProps) {
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
              <span className="film-card__details-value">{filmData.runTime} m</span>
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
              <span className="film-rating__level">Very good</span>
              <span className="film-rating__count">{filmData.scoresCount} ratings</span>
            </p>
          </div>
          <div className="film-card__text">
            <p>{filmData.description}</p>
            {/* <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>
            <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p> */}
            <p className="film-card__director"><strong>Director: {filmData.director}</strong></p>
            <p className="film-card__starring"><strong>Starring: {filmData.starring} and other</strong></p>
          </div>
        </>}
    </>
  );
}

export default FilmTabs;
