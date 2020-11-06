import PROJECTS from '../../components/projects-menu/PROJECTS_DATA';
import projectsActionTypes from './projects.constants';
import projectsReducer from './projects.reducer';

describe('Projects reducer testing', () => {
  const INITIAL_STATE = {
    numProject: 3,
    projectsDB: PROJECTS,
    buttonLabel: '',
    projectName: '',
  };

  it('Should return the initial state', () => {
    expect(projectsReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('Should handle SET_NUM_PROJECT action', () => {
    const expectedState = {
      numProject: 5,
      projectsDB: PROJECTS,
      buttonLabel: '',
      projectName: '',
    };

    expect(
      projectsReducer(INITIAL_STATE, {
        type: projectsActionTypes.SET_NUM_PROJECT,
        payload: 5,
      })
    ).toEqual(expectedState);
  });

  it('Should handle SET_PROJECTS action', () => {
    let projectsCopy = [...PROJECTS];
    projectsCopy[0].name = 'test';

    const expectedState = {
      numProject: 3,
      projectsDB: projectsCopy,
      buttonLabel: '',
      projectName: '',
    };

    expect(
      projectsReducer(INITIAL_STATE, {
        type: projectsActionTypes.SET_PROJECTS,
        payload: projectsCopy,
      })
    ).toEqual(expectedState);
  });

  it('Should handle SET_BUTTON_LABEL action', () => {
    const expectedState = {
      numProject: 3,
      projectsDB: PROJECTS,
      buttonLabel: 'Invite new user',
      projectName: '',
    };

    expect(
      projectsReducer(INITIAL_STATE, {
        type: projectsActionTypes.SET_BUTTON_LABEL,
        payload: 'Invite new user',
      })
    ).toEqual(expectedState);
  });

  it('Should handle SET_PROJECT_NAME action', () => {
    const expectedState = {
      numProject: 3,
      projectsDB: PROJECTS,
      buttonLabel: '',
      projectName: 'test2',
    };

    expect(
      projectsReducer(INITIAL_STATE, {
        type: projectsActionTypes.SET_PROJECT_NAME,
        payload: 'test2',
      })
    ).toEqual(expectedState);
  });
});
