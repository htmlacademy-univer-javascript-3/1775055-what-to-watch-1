import {NameSpace} from '../../const';
import {film} from '../../types/film';
import {State} from '../../types/state';

export const getPromo = (state: State): film => state[NameSpace.Data].promo;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getFilms = (state: State): film[] => state[NameSpace.Data].films;
export const getAvatarUrl = (state: State): string => state[NameSpace.Data].avatarUrl;

