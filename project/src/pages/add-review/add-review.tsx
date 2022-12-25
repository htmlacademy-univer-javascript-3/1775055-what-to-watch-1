import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import UserBlock from '../../components/user-block/user-block';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction } from '../../store/api-actions';
import { getFilms } from '../../store/data-process/selectors';
import { getFilm } from '../../store/film-process/selectors';

function AddReview() {
  const navigate = useNavigate();
  const params = useParams();
  const filmId = Number(params.id);
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFilms);

  useEffect(()=>{filmId > films.length ? navigate(AppRoute.NotFound) : dispatch(fetchFilmAction(filmId));},[filmId]);

  const filmData = useAppSelector(getFilm);

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
                <Link to={`/films/${filmData.id}`} className="breadcrumbs__link">{filmData.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={''}>Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock/>
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
        <ReviewForm id={filmData.id}/>
      </div>
    </section>
  );
}

export default AddReview;
