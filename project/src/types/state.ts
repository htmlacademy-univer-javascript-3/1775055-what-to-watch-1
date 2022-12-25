import { AuthStatus } from '../const.js';
import {store} from '../store/index.js';
import { film } from './film.js';
import { review } from './review.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
    authStatus: AuthStatus
};

export type DataProcess = {
  promo: film
  films: film[]
  isDataLoaded: boolean
};

export type FilmListProcess = {
  genre: string
  numberFilmsShow: number
  myList: film[]
};

export type FilmProcess = {
  film: film
  reviews: review[]
  similarFilms: film[]
};

