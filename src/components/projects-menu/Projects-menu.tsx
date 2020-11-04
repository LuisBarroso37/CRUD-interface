import React, { useState } from 'react';

import './Projects-menu.css';

import ProjectModal from '../project-modal/Project-modal';
import UsersModal from '../users-modal/Users-modal';

interface IProjects {
  name: string;
  collaborators: number;
}

export type IProjectsState = Array<IProjects>;

type IUseModalState = boolean;

type IModalState = string;

let INITIAL_STATE = [
  {
    name: 'Project name',
    collaborators: 12,
  },
  {
    name: 'Project name',
    collaborators: 6,
  },
  {
    name: 'Project name',
    collaborators: 3,
  },
  {
    name: 'Project name',
    collaborators: 3,
  },
];

const ProjectsMenu = () => {
  const [numProject, setNumProject] = useState<number>(3);
  const [projects, setProjects] = useState<IProjectsState>(INITIAL_STATE);
  const [useModal, setUseModal] = useState<IUseModalState>(false);
  const [modal, setModal] = useState<IModalState>('');

  return (
    <div className='projects-menu'>
      <div className='menu-header'>
        <p className='projects-title'>Projects</p>
        <button
          className='add-project-button'
          onClick={() => {
            setUseModal(!useModal);
            setModal('add-project');
            setNumProject(projects.length + 1);
          }}
        >
          +
        </button>
      </div>

      {projects.map((project, i) => (
        <div key={i} className='project'>
          <div className='project-info'>
            <p className='project-name'>{project.name}</p>
            <p className='project-users'>
              {project.collaborators} collaborators
            </p>
          </div>
          <div className='icons'>
            <i
              className='fas fa-user-plus crud-icon'
              onClick={() => {
                setUseModal(!useModal);
                setModal('add-user');
                setNumProject(i);
              }}
            ></i>
            <i
              className='far fa-edit crud-icon'
              onClick={() => {
                setUseModal(!useModal);
                setModal('edit-project');
                setNumProject(i);
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

      {useModal && modal === 'add-project' ? (
        <ProjectModal
          num={numProject}
          modal={modal}
          setModal={setModal}
          setUseModal={setUseModal}
          projects={projects}
          setProjects={setProjects}
          buttonLabel={'Add project'}
        />
      ) : useModal && modal === 'edit-project' ? (
        <ProjectModal
          num={numProject}
          modal={modal}
          setModal={setModal}
          setUseModal={setUseModal}
          projects={projects}
          setProjects={setProjects}
          buttonLabel={'Edit project'}
        />
      ) : useModal && modal === 'add-user' ? (
        <UsersModal />
      ) : null}
    </div>
  );
};

export default ProjectsMenu;
