import {useParams} from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import { film } from '../../types/film';
import { addReview } from '../../types/review';


type AddReviewProps = {
  films: film[]
  onReview: ({rating, comment}:addReview)=>void;
}

function AddReview({films, onReview}:AddReviewProps) {
  const params = useParams();
  const FilmId = Number(params.id);
  const filmData = films[FilmId];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmData.backgroundImage} alt={filmData.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{filmData.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={filmData.posterImage}
            alt={filmData.name}
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <ReviewForm onReview={onReview}/>
      </div>
    </section>
  );
}

export default AddReview;
