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
// import { addReview } from '../../types/review';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import LoadingScreen from '../../pages/LoadingScreen/LoadingScreen';
import HistoryRouter from '../HistoryRouter/HistoryRouter';
import browserHistory from '../../browser-history';

const isCheckedAuth = (authStatus: AuthStatus): boolean =>
  authStatus === AuthStatus.Unknown;

function App(): JSX.Element {
  const {authStatus, isDataLoaded} = useAppSelector((state) => state);
  const {films} = useAppSelector((state) => state);
  const filmData = useAppSelector((state)=> state.film);

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
              <MyList
                films = {films}
                numberFilmsShow = {films.length}
              />
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
          element = {<Player films = {films}/>}
        />
        <Route
          path = {AppRoute.AddReview}
          element = {
            <PrivateRoute authStatus={authStatus}>
              <AddReview
                filmData = {filmData}
                // onReview={({comment, rating}:addReview) => {
                //   dispatch(postReviewAction({comment, rating}));
                // }}
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
