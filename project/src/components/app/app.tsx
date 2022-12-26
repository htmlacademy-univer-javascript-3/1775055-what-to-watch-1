import { Routes, Route } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import AddReview from '../../pages/add-review/add-review';
import FilmScreen from '../../pages/film-screen/film-screen';
import MyList from '../../pages/my-list/my-list';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PlayerFilm from '../../pages/player-film/player-film';
import SignIn from '../../pages/sign-in/sign-in';
import StartScreen from '../../pages/start-screen/start-screen';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { getAuthStatus } from '../../store/user-process/selectors';
import { getLoadedDataStatus } from '../../store/data-process/selectors';

const isCheckedAuth = (authStatus: AuthStatus): boolean =>
  authStatus === AuthStatus.Unknown;

function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

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
            <StartScreen />
          }
        />
        <Route
          path = {authStatus === AuthStatus.NotAuth ? AppRoute.SignIn : AppRoute.Main}
          element = {authStatus === AuthStatus.NotAuth ? <SignIn/> : <StartScreen/>}
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
          element = {<FilmScreen/>}
        />
        <Route
          path = {AppRoute.FilmDetails}
          element = {<FilmScreen/>}
        />
        <Route
          path = {AppRoute.FilmReviews}
          element = {<FilmScreen/>}
        />
        <Route
          path = {AppRoute.Player}
          element = {<PlayerFilm/>}
        />
        <Route
          path = {AppRoute.AddReview}
          element = {
            <PrivateRoute authStatus={authStatus}>
              <AddReview />
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
