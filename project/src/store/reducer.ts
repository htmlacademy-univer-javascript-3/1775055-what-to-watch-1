import {createReducer} from '@reduxjs/toolkit';
import { AuthStatus } from '../const';
import { film } from '../types/film';
import { review } from '../types/review';
import {incNumberFilmsShow, loadFilm, loadFilms, loadPromo, loadReviews, loadSimilarFilms, postReview, requireAuth, resetNumberFilmsShow, setDataLoadedStatus, switchGenre} from './action';

type InitialState = {
  genre: string
  promo: film
  films: film[]
  film: film
  reviews: review[]
  similarFilms: film[]
  numberFilmsShow: number
  authStatus: AuthStatus
  isDataLoaded: boolean
}

const initialState: InitialState = {
  genre: 'all',
  promo: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false
  },
  films: [],
  film: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false
  },
  reviews: [],
  similarFilms: [],
  numberFilmsShow: 8,
  authStatus: AuthStatus.Unknown,
  isDataLoaded: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(incNumberFilmsShow, (state) => {
      state.numberFilmsShow += 8;
    })
    .addCase(resetNumberFilmsShow, (state) => {
      state.numberFilmsShow = 8;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(postReview, (state, action) => {
      state.reviews.push(action.payload);
    });
});

export {reducer};
