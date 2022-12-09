import SmallFilmCard from '../SmallFilmCard/SmallFilmCard';
import { film } from '../../types/film';

type FilmListProps ={
  films: film[]
  numberFilmsShow: number
}

function FilmList({films, numberFilmsShow}:FilmListProps) {
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

