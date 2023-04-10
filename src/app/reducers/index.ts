import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { GAME_KEY, gameReducer, IGame } from './game.action';

export interface State {
  [GAME_KEY]: IGame;
}

export const reducers: ActionReducerMap<State> = {
  [GAME_KEY]: gameReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
