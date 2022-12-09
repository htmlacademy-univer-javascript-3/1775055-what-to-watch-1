import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {loadFilm, loadFilms, loadPromo, loadReviews, loadSimilarFilms, postReview, redirectToRoute, requireAuth, setDataLoadedStatus} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute, AuthStatus} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { film } from '../types/film.js';
import { addReview, review } from '../types/review.js';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<film[]>(APIRoute.Films);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<film>(APIRoute.Promo);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadPromo(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchFilmAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<film>(`https://10.react.pages.academy/wtw/films/${_arg}`);
      dispatch(setDataLoadedStatus(true));
      dispatch(loadFilm(data));
      dispatch(setDataLoadedStatus(false));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<review[]>(`https://10.react.pages.academy/wtw/comments/${_arg}`);
    dispatch(loadReviews(data));
  },
);

export const postReviewAction = createAsyncThunk<void, addReview, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postReview',
  async ({comment, rating, id}, {dispatch, extra: api}) => {
    const {data: reviewData} = await api.post<review>(`/comments/${id}`, {comment, rating});
    dispatch(postReview(reviewData));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<film[]>(`https://10.react.pages.academy/wtw/films/${_arg}/similar`);
    dispatch(loadSimilarFilms(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuth(AuthStatus.Auth));
    } catch {
      dispatch(requireAuth(AuthStatus.NotAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuth(AuthStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuth(AuthStatus.NotAuth));
  },
);

