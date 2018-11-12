import { sittersReducer } from './sitters-list/sitters.reducer';
import { combineReducers } from 'redux';
import { Sitter } from './entities/sitter';

export class SittersState {
  isBaby: boolean;
  sitters: Sitter[]
}

export class IAppState {
  sitters?: SittersState;
}
export const rootReducer = combineReducers<IAppState>({
sitters: sittersReducer,

// router: routerReducer
});