import { shallow } from 'enzyme';

import { ProjectsMenu } from './Projects-menu';
import PROJECTS from './PROJECTS_DATA';
import Modal from '../modal/Modal';

describe('Projects Menu component testing', () => {
  let wrapper;
  let mockProps;
  let setModal;
  let setUseModal;
  let setProjects;
  let setNumProject;
  let setButtonLabel;

  beforeEach(() => {
    setModal = jest.fn();
    setUseModal = jest.fn();
    setProjects = jest.fn((newProjects) => (mockProps.projects = newProjects));
    setNumProject = jest.fn();
    setButtonLabel = jest.fn();

    mockProps = {
      projects: PROJECTS,
      setModal,
      useModal: '',
      setUseModal,
      setProjects,
      setNumProject,
      setButtonLabel,
    };

    wrapper = shallow(<ProjectsMenu {...mockProps} />);
  });

  it('expect to render ProjectMenu component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expect actions to be dispatched when add-project-icon button is clicked', () => {
    wrapper.find('.add-project-button').simulate('click');
    expect(setUseModal).toHaveBeenCalled();
    expect(setModal).toHaveBeenCalled();
    expect(setNumProject).toHaveBeenCalled();
    expect(setButtonLabel).toHaveBeenCalled();
  });

  it('expect actions to be dispatched when add-user icon is clicked', () => {
    wrapper.find('.fa-user-plus').first().simulate('click');
    expect(setUseModal).toHaveBeenCalled();
    expect(setModal).toHaveBeenCalled();
    expect(setNumProject).toHaveBeenCalled();
    expect(setButtonLabel).toHaveBeenCalled();
  });

  it('expect actions to be dispatched when edit-project icon is clicked', () => {
    wrapper.find('.fa-edit').first().simulate('click');
    expect(setUseModal).toHaveBeenCalled();
    expect(setModal).toHaveBeenCalled();
    expect(setNumProject).toHaveBeenCalled();
    expect(setButtonLabel).toHaveBeenCalled();
  });

  it('expect modal to be rendered when add-user icon is clicked', () => {
    const newMockProps = {
      projects: PROJECTS,
      setModal,
      useModal: 'add-user',
      setUseModal,
      setProjects,
      setNumProject,
      setButtonLabel,
    };

    const newWrapper = shallow(<ProjectsMenu {...newMockProps} />);

    const modal = newWrapper.find(Modal);
    expect(modal).toHaveLength(1);
  });

  it('expect actions to be dispatched when delete-project icon is clicked', () => {
    const newProjects = [...mockProps.projects];
    newProjects.shift(); // Remove first project

    wrapper.find('.fa-trash-alt').first().simulate('click');
    expect(setProjects).toHaveBeenCalled();
    expect(setProjects(newProjects)).toEqual(mockProps.projects);
  });
});
