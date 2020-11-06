import { Reducer } from 'react';
import { IUsersReducerActions } from './users.actions';
import { SET_SEARCH_FIELD, TOGGLE_BUTTON } from './users.constants';

export interface IUsersReducerState {
  searchField: string;
  buttonClicked: boolean;
}

const INITIAL_STATE = {
  searchField: '',
  buttonClicked: false,
};

const usersReducer: Reducer<IUsersReducerState, IUsersReducerActions> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case SET_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload,
      };
    case TOGGLE_BUTTON:
      return {
        ...state,
        buttonClicked: !state.buttonClicked,
      };
    default:
      return state;
  }
};

export default usersReducer;
