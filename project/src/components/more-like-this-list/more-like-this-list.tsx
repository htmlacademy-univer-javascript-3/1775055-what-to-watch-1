import SmallFilmCard from '../small-film-card/small-film-card';
import { film } from '../../types/film';

type FilmListProps ={
  films: film[]
}

function FilmList({films}:FilmListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((filmData, id) => {
        const keyValue = `${filmData.name}`;
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
