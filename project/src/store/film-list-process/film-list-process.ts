import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FilmListProcess} from '../../types/state';
import { fetchMyListAction, switchFilmStatusAction } from '../api-actions';

const initialState: FilmListProcess = {
  genre: 'all',
  numberFilmsShow: 8,
  myList:[]
};

export const filmListProcess = createSlice({
  name: NameSpace.FilmList,
  initialState,
  reducers: {
    switchGenre: (state, action) => {
      state.genre = action.payload;
    },
    incNumberFilmsShow: (state) => {
      state.numberFilmsShow += 8;
    },
    resetNumberFilmsShow :(state) => {
      state.numberFilmsShow = 8;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMyListAction.fulfilled, (state, action) => {
        state.myList = action.payload;
      })
      .addCase(switchFilmStatusAction.fulfilled, (state, action) => {
        const film = state.myList.find((filmData)=>filmData.id === action.payload.id);
        action.payload.isFavorite && state.myList.push(action.payload);
        typeof film !== 'undefined' && state.myList.splice(state.myList.indexOf(film), 1);
      });}
});

