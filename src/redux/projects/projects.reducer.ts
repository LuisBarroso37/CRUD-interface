import { Reducer } from 'react';

import PROJECTS from '../../components/projects-menu/PROJECTS_DATA';
import { IProjectsReducerActions, IProjects } from './projects.actions';
import projectsActionTypes from './projects.constants';

export interface IProjectsReducerState {
  numProject: number;
  projectsDB: IProjects;
  buttonLabel: string;
  projectName: string;
}

const INITIAL_STATE = {
  numProject: 3,
  projectsDB: PROJECTS,
  buttonLabel: '',
  projectName: '',
};

const projectsReducer: Reducer<
  IProjectsReducerState,
  IProjectsReducerActions
> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case projectsActionTypes.SET_NUM_PROJECT:
      return {
        ...state,
        numProject: action.payload,
      };
    case projectsActionTypes.SET_PROJECTS:
      return {
        ...state,
        projectsDB: action.payload,
      };
    case projectsActionTypes.SET_BUTTON_LABEL:
      return {
        ...state,
        buttonLabel: action.payload,
      };
    case projectsActionTypes.SET_PROJECT_NAME:
      return {
        ...state,
        projectName: action.payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;
