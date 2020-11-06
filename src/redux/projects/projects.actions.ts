import projectsActionTypes from './projects.constants';

interface ISetNumProject {
  type: typeof projectsActionTypes.SET_NUM_PROJECT;
  payload: number;
}

const setNumProject = (index: number) => ({
  type: projectsActionTypes.SET_NUM_PROJECT,
  payload: index,
});

export interface IUser {
  name: string;
  email: string;
}

interface IProject {
  name: string;
  collaborators: number;
  users: Array<IUser>;
}

export type IProjects = Array<IProject>;

interface ISetProjects {
  type: typeof projectsActionTypes.SET_PROJECTS;
  payload: IProjects;
}

const setProjects = (projects: IProjects) => ({
  type: projectsActionTypes.SET_PROJECTS,
  payload: projects,
});

interface ISetButtonLabel {
  type: typeof projectsActionTypes.SET_BUTTON_LABEL;
  payload: string;
}

const setButtonLabel = (label: string) => ({
  type: projectsActionTypes.SET_BUTTON_LABEL,
  payload: label,
});

interface ISetProjectName {
  type: typeof projectsActionTypes.SET_PROJECT_NAME;
  payload: string;
}

const setProjectName = (name: string) => ({
  type: projectsActionTypes.SET_PROJECT_NAME,
  payload: name,
});

export type IProjectsReducerActions = ISetNumProject &
  ISetProjects &
  ISetButtonLabel &
  ISetProjectName;

export type IProjectsActionsDispatch =
  | ISetNumProject
  | ISetProjects
  | ISetButtonLabel
  | ISetProjectName;

export { setNumProject, setProjects, setButtonLabel, setProjectName };
