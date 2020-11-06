import { combineReducers } from 'redux';

import { IModalActionsDispatch } from './modal/modal.actions';
import modalReducer, { IModalReducerState } from './modal/modal.reducer';
import { IProjectsActionsDispatch } from './projects/projects.actions';
import projectsReducer, {
  IProjectsReducerState,
} from './projects/projects.reducer';
import { IUsersActionsDispatch } from './users/users.actions';
import usersReducer, { IUsersReducerState } from './users/users.reducer';

export interface IRootReducerState {
  modal: IModalReducerState;
  projects: IProjectsReducerState;
  users: IUsersReducerState;
}

export type IRootReducerActions =
  | IModalActionsDispatch
  | IProjectsActionsDispatch
  | IUsersActionsDispatch;

export default combineReducers({
  modal: modalReducer,
  projects: projectsReducer,
  users: usersReducer,
});
