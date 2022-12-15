import { createSelector } from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { film } from '../../types/film';
import {State} from '../../types/state';
import { getFilms } from '../data-process/selectors';

export const getGenre = (state: State): string => state[NameSpace.FilmList].genre;
export const getNumberFilmsShow = (state: State): number => state[NameSpace.FilmList].numberFilmsShow;
export const getMyList = (state: State): film[] => state[NameSpace.FilmList].myList;

export const getGenreFilms = createSelector(
  [getFilms, getGenre],
  (films, genre)=>{
    let genreFilms:film[];
    genre === 'all' ? genreFilms = films : genreFilms = films.filter((filmD) => filmD.genre === genre);
    return genreFilms;
  });
