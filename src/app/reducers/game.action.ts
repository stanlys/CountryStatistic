import { ICountry } from '@core/interface/flag.interface';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export const GAME_KEY = 'game';

export const changeGame = createAction(
  '[Game Component] Change',
  props<{ countries: ICountry[]; region: string }>()
);

export const setUser = createAction(
  '[Game Component] SetUserName',
  props<{ user: string }>()
);

export const answer = createAction('[Game Component] Answer');

export interface IGame {
  user: string;
  loss: number;
  success: number;
  regions: ICountry[];
}

export const INITIAL_STATE: IGame = {
  user: '',
  loss: 0,
  success: 0,
  regions: [],
};

export const gameReducer = createReducer(
  INITIAL_STATE,
  on(setUser, (state, action) => ({ ...state, user: action.user })),
  on(changeGame, (state, action) => {
    const _countries = action.countries;
    const _region = action.region;
    if (_region === 'Весь мир') return { ...state, regions: _countries };
    return {
      ...state,
      regions: _countries.filter((country) => country.region === _region),
    };
  })
);

export const featureSelector = createFeatureSelector<IGame>(GAME_KEY);

export const userNameSelector = createSelector(
  featureSelector,
  (state) => state.user
);

export const countriesSelector = createSelector(
  featureSelector,
  (state) => state.regions
);
