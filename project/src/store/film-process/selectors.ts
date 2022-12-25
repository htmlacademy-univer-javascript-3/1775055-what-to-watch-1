import {NameSpace} from '../../const';
import { film } from '../../types/film';
import { review } from '../../types/review';
import {State} from '../../types/state';

export const getFilm = (state: State): film => state[NameSpace.Film].film;
export const getReviews = (state: State): review[] => state[NameSpace.Film].reviews;
export const getSimilarFilms = (state: State): film[] => state[NameSpace.Film].similarFilms;

