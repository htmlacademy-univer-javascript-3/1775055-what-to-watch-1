import UserBlock from '../../components/user-block/user-block';
import FilmList from '../../components/film-list/film-list';
import Logotype from '../../components/logotype/logotype';
import { useAppSelector } from '../../hooks';
import { getMyList } from '../../store/film-list-process/selectors';

function MyList() {
  const films = useAppSelector(getMyList);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logotype/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <UserBlock/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={films} numberFilmsShow={films.length}/>
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
  );
}

export default MyList;
