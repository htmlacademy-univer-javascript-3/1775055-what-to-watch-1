import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {redirectToRoute} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { film } from '../types/film';
import { addReview, review } from '../types/review';

export const fetchFilmsAction = createAsyncThunk<film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<film[]>(APIRoute.Films);
    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<film>(APIRoute.Promo);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<film, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<film>(`https://10.react.pages.academy/wtw/films/${_arg}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<review[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<review[]>(`https://10.react.pages.academy/wtw/comments/${_arg}`);
    return data;
  },
);

export const postReviewAction = createAsyncThunk<review, addReview, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postReview',
  async ({comment, rating, id}, {dispatch, extra: api}) => {
    const {data: reviewData} = await api.post<review>(`/comments/${id}`, {comment, rating});
    return reviewData;
  },
);

export const fetchMyListAction = createAsyncThunk<film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchMyList',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<film[]>(APIRoute.MyList);
    return data;
  },
);

export const switchFilmStatusAction = createAsyncThunk<film, [number, number], {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/switchFilmStatus',
  async ([FilmId, status], {dispatch, extra: api}) => {
    const {data: filmData} = await api.post<film>(`/favorite/${FilmId}/${status}`);
    return filmData;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<film[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<film[]>(`https://10.react.pages.academy/wtw/films/${_arg}/similar`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password}, {dispatch, extra: api}) => {
    const {data: {token, avatarUrl}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
    return avatarUrl;
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
  },
);

