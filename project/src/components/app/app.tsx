import { Routes, Route } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import AddReview from '../../pages/AddReview/AddReview';
import Film from '../../pages/Film/Film';
import MyList from '../../pages/MyList/MyList';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Player from '../../pages/Player/Player';
import SignIn from '../../pages/SignIn/SignIn';
import StartScreen from '../../pages/StartScreen/StartScreen';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import LoadingScreen from '../../pages/LoadingScreen/LoadingScreen';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import browserHistory from '../../browser-history';
import { getAuthStatus } from '../../store/user-process/selectors';
import { getFilms, getLoadedDataStatus } from '../../store/data-process/selectors';
import { getFilm } from '../../store/film-process/selectors';

const isCheckedAuth = (authStatus: AuthStatus): boolean =>
  authStatus === AuthStatus.Unknown;

function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const films = useAppSelector(getFilms);
  const filmData = useAppSelector(getFilm);

  if (isCheckedAuth(authStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {
            <StartScreen
              films = {films}
            />
          }
        />
        <Route
          path = {AppRoute.SignIn}
          element = {<SignIn/>}
        />
        <Route
          path = {AppRoute.MyList}
          element = {
            <PrivateRoute authStatus={authStatus}>
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route
          path = {AppRoute.Film}
          element = {<Film/>}
        />
        <Route
          path = {AppRoute.FilmDetails}
          element = {<Film/>}
        />
        <Route
          path = {AppRoute.FilmReviews}
          element = {<Film/>}
        />
        <Route
          path = {AppRoute.Player}
          element = {<Player filmData = {filmData}/>}
        />
        <Route
          path = {AppRoute.AddReview}
          element = {
            <PrivateRoute authStatus={authStatus}>
              <AddReview
                filmData = {filmData}
              />
            </PrivateRoute>
          }
        />
        <Route
          path = "*"
          element = {<NotFoundPage/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
