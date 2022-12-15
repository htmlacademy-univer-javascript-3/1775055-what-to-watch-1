import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { filmListProcess } from '../../store/film-list-process/film-list-process';
import cn from 'classnames';

function GenresList() {
  const dispatch = useAppDispatch();
  const [activeGenre, setActiveGenre] = useState<'all'|'Action'|'Adventure'|'Comedy'|'Crime'|'Documentary'|'Drama'|'Horror'|'Kids & Family'|'Romance'|'Sci-Fi'|'Thriller'>('all');

  useEffect(() => {
    dispatch(filmListProcess.actions.switchGenre(activeGenre));
  }, [activeGenre]);

  return (
    <ul className="catalog__genres-list">
      <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === 'all'})}
        onClick={()=>{
          setActiveGenre('all');
        }}
      >
        <Link to="#" className="catalog__genres-link">
          All genres
        </Link>
      </li>
      <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === 'Action'})}
        onClick={()=>{
          setActiveGenre('Action');
        }}
      >
        <Link to="#" className="catalog__genres-link">
          Actions
        </Link>
      </li>
      <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === 'Adventure'})}
        onClick={()=>{
          setActiveGenre('Adventure');
        }}
      >
        <Link to="#" className="catalog__genres-link">
          Adventures
        </Link>
      </li>
      <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === 'Comedy'})}
        onClick={()=>{
          setActiveGenre('Comedy');
        }}
      >
        <Link to="#" className="catalog__genres-link">
          Comedies
        </Link>
      </li>
      <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === 'Crime'})}
        onClick={()=>{
          setActiveGenre('Crime');
        }}
      >
        <Link to="#" className="catalog__genres-link">
          Crime
        </Link>
      </li>
      <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === 'Documentary'})}
        onClick={()=>{
          setActiveGenre('Documentary');
        }}
      >
        <Link to="#" className="catalog__genres-link">
          Documentary
        </Link>
      </li>
      <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === 'Drama'})}
        onClick={()=>{
          setActiveGenre('Drama');
        }}
      >
        <Link to="#" className="catalog__genres-link">
          Dramas
        </Link>
      </li>
      <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === 'Horror'})}
        onClick={()=>{
          setActiveGenre('Horror');
        }}
      >
        <Link to="#" className="catalog__genres-link">
          Horror
        </Link>
      </li>
      <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === 'Kids & Family'})}
        onClick={()=>{
          setActiveGenre('Kids & Family');
        }}
      >
        <Link to="#" className="catalog__genres-link">
          Kids &amp; Family
        </Link>
      </li>
      <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === 'Romance'})}
        onClick={()=>{
          setActiveGenre('Romance');
        }}
      >
        <Link to="#" className="catalog__genres-link">
          Romance
        </Link>
      </li>
      <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === 'Sci-Fi'})}
        onClick={()=>{
          setActiveGenre('Sci-Fi');
        }}
      >
        <Link to="#" className="catalog__genres-link">
          Sci-Fi
        </Link>
      </li>
      <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === 'Thriller'})}
        onClick={()=>{
          setActiveGenre('Thriller');
        }}
      >
        <Link to="#" className="catalog__genres-link">
          Thrillers
        </Link>
      </li>
    </ul>
  );
}

export default memo(GenresList);

