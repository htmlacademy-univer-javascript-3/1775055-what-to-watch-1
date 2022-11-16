import {createAction} from '@reduxjs/toolkit';

export const switchGenre = createAction<string, string>('GenreFilmList/switchGenre');
export const viewGenreFilms = createAction('GenreFilmList/viewGenreFilms');
export const incNumberFilmsShow = createAction('FilmList/incNumberFilmsShow');
export const resetNumberFilmsShow = createAction('FilmList/resetNumberFilmsShow');

