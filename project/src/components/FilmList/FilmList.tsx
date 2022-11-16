import SmallFilmCard from '../SmallFilmCard/SmallFilmCard';
import { film } from '../../types/film';
// import { useAppSelector} from '../../hooks';

type FilmListProps ={
  films: film[]
  numberFilmsShow:number
}

function FilmList({films, numberFilmsShow}:FilmListProps) {
  // const numberFilmsShow = useAppSelector((state) => state.numberFilmsShow);

  return (
    <div className="catalog__films-list">
      {films.slice(0, numberFilmsShow).map((filmData, id) => {
        const keyValue = `${id}-${filmData.name}`;
        return (
          <SmallFilmCard
            filmData={filmData}
            key={keyValue}
          />

        );
      })}
    </div>
  );
}

export default FilmList;

