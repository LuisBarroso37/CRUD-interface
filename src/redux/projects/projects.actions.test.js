import {
  setNumProject,
  setProjects,
  setButtonLabel,
  setProjectName,
} from './projects.actions';
import projectsActionTypes from './projects.constants';
import PROJECTS from '../../components/projects-menu/PROJECTS_DATA';

describe('Projects actions testing', () => {
  it('Should create an action to change project number', () => {
    const expectedState = {
      type: projectsActionTypes.SET_NUM_PROJECT,
      payload: 4,
    };

    expect(setNumProject(4)).toEqual(expectedState);
  });

  it('Should create an action to update projects', () => {
    let projectsCopy = [...PROJECTS];
    projectsCopy[0].name = 'test';

    const expectedState = {
      type: projectsActionTypes.SET_PROJECTS,
      payload: projectsCopy,
    };

    expect(setProjects(projectsCopy)).toEqual(expectedState);
  });

  it("Should create an action to change a project's name", () => {
    const expectedState = {
      type: projectsActionTypes.SET_PROJECT_NAME,
      payload: 'test3',
    };

    expect(setProjectName('test3')).toEqual(expectedState);
  });

  it('Should create an action to change button label', () => {
    const expectedState = {
      type: projectsActionTypes.SET_BUTTON_LABEL,
      payload: 'Edit project',
    };

    expect(setButtonLabel('Edit project')).toEqual(expectedState);
  });
});
