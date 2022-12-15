import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { dataProcess } from './data-process/data-process';
import { filmListProcess } from './film-list-process/film-list-process';
import { filmProcess } from './film-process/film-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.FilmList]: filmListProcess.reducer,
});
