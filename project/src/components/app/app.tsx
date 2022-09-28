import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import AddReview from '../../pages/AddReview/AddReview';
import Film from '../../pages/Film/Film';
import MyList from '../../pages/MyList/MyList';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Player from '../../pages/Player/Player';
import SignIn from '../../pages/SignIn/SignIn';
import StartScreen from '../../pages/StartScreen/StartScreen';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const PromoFilmData = {
  PROMO_FILM_TITLE: 'The Grand Budapest Hotel',
  PROMO_FILM_GENRE: 'Drama',
  PROMO_FILM_YEAR: '2014'
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {
            <StartScreen
              promoFilmTitle = {PromoFilmData.PROMO_FILM_TITLE}
              promoFilmGenre = {PromoFilmData.PROMO_FILM_GENRE}
              promoFilmYear = {PromoFilmData.PROMO_FILM_YEAR}
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
            <PrivateRoute authStatus={AuthStatus.NotAuth}>
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route
          path = {AppRoute.Film}
          element = {<Film/>}
        />
        <Route
          path = {AppRoute.Player}
          element = {<Player/>}
        />
        <Route
          path = {AppRoute.AddReview}
          element = {
            <PrivateRoute authStatus={AuthStatus.Auth}>
              <AddReview/>
            </PrivateRoute>
          }
        />
        <Route
          path = "*"
          element = {<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
