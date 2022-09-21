import StartScreen from '../../pages/StartScreen/StartScreen';


const PromoFilmData = {
  PROMO_FILM_TITLE: 'The Grand Budapest Hotel',
  PROMO_FILM_GENRE: 'Drama',
  PROMO_FILM_YEAR: '2014'
};

function App(): JSX.Element {
  return (
    <div>
      <StartScreen
        promoFilmTitle = {PromoFilmData.PROMO_FILM_TITLE}
        promoFilmGenre = {PromoFilmData.PROMO_FILM_GENRE}
        promoFilmYear = {PromoFilmData.PROMO_FILM_YEAR}
      />
    </div>
  );
}

export default App;
