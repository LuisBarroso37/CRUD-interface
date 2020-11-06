import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import './Projects-menu.css';

import Modal from '../modal/Modal';
import {
  IRootReducerState,
  IRootReducerActions,
} from '../../redux/root-reducer';
import { setModal, setUseModal } from '../../redux/modal/modal.actions';
import {
  setProjects,
  IProjects,
  setButtonLabel,
  setNumProject,
} from '../../redux/projects/projects.actions';

type IProjectsMenuProps = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

export const ProjectsMenu: React.FC<IProjectsMenuProps> = ({
  setModal,
  useModal,
  setUseModal,
  projects,
  setProjects,
  setNumProject,
  setButtonLabel,
}) => (
  <div className='projects-menu'>
    <div className='menu-header'>
      <p className='projects-title'>Projects</p>
      <button
        className='add-project-button'
        onClick={() => {
          setUseModal();
          setModal('add-project');
          setNumProject(projects.length + 1);
          setButtonLabel('Add project');
        }}
      >
        +
      </button>
    </div>
    
    <div className='projects-content'>
      {projects.map((project, i) => (
        <div key={i} className='project'>
          <div className='project-info'>
            <p className='project-name'>{project.name}</p>
            <p className='project-users'>{project.collaborators} collaborators</p>
          </div>
          <div className='icons'>
            <i
              className='fas fa-user-plus crud-icon'
              onClick={() => {
                setUseModal();
                setModal('add-user');
                setNumProject(i);
                setButtonLabel('Invite new user');
              }}
            ></i>
            <i
              className='far fa-edit crud-icon'
              onClick={() => {
                setUseModal();
                setModal('edit-project');
                setNumProject(i);
                setButtonLabel('Edit project');
              }}
            ></i>
            <i
              className='far fa-trash-alt crud-icon'
              onClick={() => {
                let projectsCopy = [...projects];
                projectsCopy.splice(i, 1);
                setProjects(projectsCopy);
              }}
            ></i>
          </div>
        </div>
      ))}
    </div>

    {useModal ? <Modal /> : null}
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch<IRootReducerActions>) => ({
  setUseModal: () => dispatch(setUseModal()),
  setModal: (action: string) => dispatch(setModal(action)),
  setNumProject: (index: number) => dispatch(setNumProject(index)),
  setProjects: (projects: IProjects) => dispatch(setProjects(projects)),
  setButtonLabel: (label: string) => dispatch(setButtonLabel(label)),
});

const mapStateToProps = (state: IRootReducerState) => ({
  useModal: state.modal.useModal,
  projects: state.projects.projectsDB,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsMenu);
