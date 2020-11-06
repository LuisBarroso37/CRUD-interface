import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import './Project-modal.css';

import {
  IRootReducerActions,
  IRootReducerState,
} from '../../redux/root-reducer';
import { setModal, setUseModal } from '../../redux/modal/modal.actions';
import {
  IProjects,
  setProjectName,
  setProjects,
} from '../../redux/projects/projects.actions';

type IProjectModalProps = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

const ProjectModal: React.FC<IProjectModalProps> = ({
  setModal,
  setUseModal,
  num,
  projects,
  setProjects,
  buttonLabel,
  projectName,
  setProjectName,
}) => {
  // Store user's input
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { value } = event.target;
    setProjectName(value);
  };

  const confirmAction = () => {
    let updatedProjects = [...projects];

    if (buttonLabel === 'Add project') {
      updatedProjects.push({ name: projectName, collaborators: 0, users: [] });
      setProjects(updatedProjects);
    } else {
      updatedProjects[num].name = projectName;
      setProjects(updatedProjects);
    }

    setUseModal();
    setModal('');
  };

  return (
    <div className='form'>
      <div className='project-input'>
        <p className='input-label'>Project's name</p>
        <input
          className='input'
          type='text'
          name='projectName'
          placeholder='e.g. Spotlify'
          onChange={onInputChange}
        />
      </div>
      <div className='enterprise-input'>
        <p className='input-label'>Enterprise</p>
        <select className='input dropdown' name='enterprise'>
          <option value='quop'>Quop</option>
        </select>
      </div>
      <button className='submit-button' onClick={() => confirmAction()}>
        {buttonLabel}
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<IRootReducerActions>) => ({
  setUseModal: () => dispatch(setUseModal()),
  setModal: (action: string) => dispatch(setModal(action)),
  setProjects: (projects: IProjects) => dispatch(setProjects(projects)),
  setProjectName: (name: string) => dispatch(setProjectName(name)),
});

const mapStateToProps = (state: IRootReducerState) => ({
  num: state.projects.numProject,
  projects: state.projects.projectsDB,
  buttonLabel: state.projects.buttonLabel,
  projectName: state.projects.projectName,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModal);
