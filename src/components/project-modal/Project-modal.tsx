import React, { useState, useRef, useCallback, useEffect } from 'react';

import './Project-modal.css';

import { IProjectsState } from '../projects-menu/Projects-menu';

type IProjectModalState = string;

interface IProjectModalProps {
  modal: string;
  setModal: (modal: string) => void;
  setUseModal: (useModal: boolean) => void;
  projects: IProjectsState;
  setProjects: (project: IProjectsState) => void;
  buttonLabel: string;
  num: number;
}

const ProjectModal = ({
  num,
  modal,
  setModal,
  setUseModal,
  projects,
  setProjects,
  buttonLabel,
}: IProjectModalProps) => {
  const [name, setName] = useState<IProjectModalState>('');
  const ref = useRef(null);

  const closeModal = () => {
    setUseModal(!modal);
    setModal('');
  };

  // Store user's input
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { value } = event.target;
    setName(value);
  };

  const confirmAction = () => {
    let updatedProjects = [...projects];

    if (buttonLabel === 'Add project') {
      updatedProjects.push({ name, collaborators: 0 });
      setProjects(updatedProjects);
    } else {
      updatedProjects[num].name = name;
      setProjects(updatedProjects);
    }

    setUseModal(!modal);
    setModal('');
  };

  // Close Modal when click is performed outised of modal
  // or when Escape key is pressed
  const escapeListener = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }, []);

  const clickListener = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !(ref.current as any).contains(event.target)) {
        closeModal();
      }
    },
    [ref.current]
  );

  // ComponentDidMount and ComponentWillUnmount for adding listerners to closing the modal
  useEffect(() => {
    // Add the listeners on component mount
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    // Remove the listeners on component unmount
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, []);

  return (
    <div className='modal-background'>
      <div ref={ref} className='modal'>
        <div className='modal-header'>
          <p className='modal-title'>
            {buttonLabel === 'Edit project'
              ? `Edit "${projects[num].name}"`
              : 'Add project'}
          </p>
          <i
            className='fas fa-times modal-close'
            onClick={() => closeModal()}
          ></i>
        </div>
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
        </div>
        <button className='submit-button' onClick={() => confirmAction()}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
