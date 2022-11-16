import {createReducer} from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import {incNumberFilmsShow, resetNumberFilmsShow, switchGenre, viewGenreFilms} from './action';

const initialState = {
  genre: 'all',
  films: films,
  numberFilmsShow: 8
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchGenre, (state, {payload}) => {
      state.genre = payload;
    })
    .addCase(viewGenreFilms, (state) => {
      state.films = films;
      {state.genre === 'all' ? state.films = films : state.films = films.filter((film) => film.genre === state.genre);}
    })
    .addCase(incNumberFilmsShow, (state) => {
      state.numberFilmsShow += 8;
    })
    .addCase(resetNumberFilmsShow, (state) => {
      state.numberFilmsShow = 8;
    });
});

export {reducer};
