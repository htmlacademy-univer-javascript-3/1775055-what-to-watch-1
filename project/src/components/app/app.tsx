import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import AddReview from '../../pages/AddReview/AddReview';
import Film from '../../pages/Film/Film';
import MyList from '../../pages/MyList/MyList';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Player from '../../pages/Player/Player';
import SignIn from '../../pages/SignIn/SignIn';
import StartScreen from '../../pages/StartScreen/StartScreen';
import { film } from '../../types/film';
import { addReview, review } from '../../types/review';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

type AppScreenProps = {
  films: film[]
  reviews: review[]
}

function App({films, reviews}:AppScreenProps ): JSX.Element {
  return (
    <BrowserRouter>
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
            <PrivateRoute authStatus={AuthStatus.Auth}>
              <MyList
                films = {films}
                numberFilmsShow = {films.length}
              />
            </PrivateRoute>
          }
        />
        <Route
          path = {AppRoute.Film}
          element = {<Film films={films} reviews={reviews}/>}
        />
        <Route
          path = {AppRoute.FilmDetails}
          element = {<Film films={films} reviews={reviews}/>}
        />
        <Route
          path = {AppRoute.FilmReviews}
          element = {<Film films={films} reviews={reviews}/>}
        />
        <Route
          path = {AppRoute.Player}
          element = {<Player films = {films}/>}
        />
        <Route
          path = {AppRoute.AddReview}
          element = {
            <PrivateRoute authStatus={AuthStatus.Auth}>
              <AddReview
                films = {films}
                onReview={({rating, comment}:addReview) => {
                  throw new Error(`${rating}, ${comment}`);
                }}
              />
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
