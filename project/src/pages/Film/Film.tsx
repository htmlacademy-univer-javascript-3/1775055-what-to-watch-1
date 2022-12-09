import {Link, useNavigate, useParams} from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import {AppRoute, AuthStatus} from '../../const';
import FilmNavList from '../../components/FilmNavList/FilmNavList';
import { useEffect, useState } from 'react';
import MoreLikeThisList from '../../components/MoreLikeThisList/MoreLikeThisList';
import { fetchFilmAction, fetchReviewsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { store } from '../../store';
import { useAppSelector } from '../../hooks';
import FilmTabs from '../../components/FilmTabs/FilmTabs';
import UserBlock from '../../components/UserBlock/UserBlock';

function Film() {
  const params = useParams();
  const FilmId = Number(params.id);
  const navigate = useNavigate();
  const reviews = useAppSelector((state)=> state.reviews);
  const filmData = useAppSelector((state)=> state.film);
  const similarFilms = useAppSelector((state)=> state.similarFilms);
  const authStatus = useAppSelector((state)=> state.authStatus);

  const [tab, setTab] = useState<'overview'|'details'|'reviews'>('overview');

  useEffect(() => {
    store.dispatch(fetchFilmAction(FilmId));
    store.dispatch(fetchSimilarFilmsAction(FilmId));
    store.dispatch(fetchReviewsAction(FilmId));
  }, [FilmId]);

  const getType = (type: 'overview'|'details'|'reviews') => {
    setTab(type);
  };


  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={filmData.backgroundImage}
              alt={filmData.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo/>
            <UserBlock/>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmData.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmData.genre}</span>
                <span className="film-card__year">{filmData.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={()=>navigate(`/player/${filmData.id}`)}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={()=>navigate(AppRoute.MyList)}>
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {authStatus === AuthStatus.Auth && <Link to={`/films/${FilmId}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={filmData.posterImage}
                alt={filmData.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <FilmNavList FilmId={FilmId} getType={getType}/>
              </nav>
              <FilmTabs type={tab} filmData={filmData} reviews={reviews}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoreLikeThisList films={similarFilms}/>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Film;
