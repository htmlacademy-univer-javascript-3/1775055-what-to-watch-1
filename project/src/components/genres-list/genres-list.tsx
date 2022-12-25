import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filmListProcess } from '../../store/film-list-process/film-list-process';
import cn from 'classnames';
import { getFilms } from '../../store/data-process/selectors';

function GenresList() {
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFilms);
  const allGenres = ['All genres'];
  films.map((film)=>allGenres.push(film.genre));

  const newSet = new Set(allGenres);
  const uniqueGenres = Array.from(newSet);
  const genres = uniqueGenres.slice(0, 10);


  const [activeGenre, setActiveGenre] = useState('All genres');

  useEffect(() => {
    dispatch(filmListProcess.actions.switchGenre(activeGenre));
  }, [activeGenre]);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre)=>(
        <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === genre})}
          onClick={()=>{
            setActiveGenre(genre);
          }}
          key={genre}
        >
          <Link to="#" className="catalog__genres-link">
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(GenresList);


