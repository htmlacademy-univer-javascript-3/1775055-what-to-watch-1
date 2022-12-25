import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import GenresList from '../../components/genres-list/genres-list';
import ShowMoreButton from '../../components/ui/show-more-button/show-more-button';
import { useAppSelector, useAppDispatch } from '../../hooks';
import UserBlock from '../../components/user-block/user-block';
import Logo from '../../components/logo/logo';
import { getGenreFilms, getNumberFilmsShow } from '../../store/film-list-process/selectors';
import { filmListProcess } from '../../store/film-list-process/film-list-process';
import { getPromo } from '../../store/data-process/selectors';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';

function StartScreen() {
  const dispatch = useAppDispatch();

  const filmData = useAppSelector(getPromo);
  const genreFilms = useAppSelector(getGenreFilms);
  const numberFilmsShow = useAppSelector(getNumberFilmsShow);

  useEffect(() => {
    dispatch(filmListProcess.actions.resetNumberFilmsShow());
  },[]);


  return (
    <>
      <section className="film-card">
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
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={filmData.posterImage}
                alt={filmData.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmData.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmData.genre}</span>
                <span className="film-card__year">{filmData.released}</span>
              </p>
              <FilmCardButtons filmId={filmData.id}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList/>
          <FilmList films={genreFilms} numberFilmsShow={numberFilmsShow}/>
          {numberFilmsShow <= genreFilms.length && <ShowMoreButton/>}
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Link to='#' className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default StartScreen;
