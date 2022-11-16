import SmallFilmCard from '../SmallFilmCard/SmallFilmCard';
import { film } from '../../types/film';

type FilmListProps ={
  films: film[]
  genre: string
  filmId: number
}

function FilmList({films, genre, filmId}:FilmListProps) {
  return (
    <div className="catalog__films-list">
      {films.filter((filmData)=>filmData.id !== filmId && filmData.genre === genre).slice(0,4).map((filmData, id) => {
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
