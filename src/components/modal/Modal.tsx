import React, { useRef, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import './Modal.css';

import ProjectModal from '../project-modal/Project-modal';
import UsersModal from '../users-modal/Users-modal';
import { IRootReducerState } from '../../redux/root-reducer';
import {
  IModalActionsDispatch,
  setModal,
  setUseModal,
} from '../../redux/modal/modal.actions';

type IModalProps = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

const Modal: React.FC<IModalProps> = ({
  setUseModal,
  setModal,
  projects,
  num,
  buttonLabel,
}: IModalProps) => {
  const ref = useRef(null);

  // Handler function
  const closeModal = useCallback(() => {
    setUseModal();
    setModal('');
  }, [setModal, setUseModal]);

  // Close Modal when click is performed outside of modal
  const useOnClickOutside = (
    ref: any,
    handler: (event: MouseEvent | TouchEvent) => void
  ) => {
    useEffect(() => {
      const listener = (event: MouseEvent | TouchEvent) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      // Add the listeners on component mount
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      // Remove the listeners on component unmount
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(ref, () => closeModal());

  return (
    <div className='modal-background'>
      <div ref={ref} className='modal'>
        <div className='modal-header'>
          <p className='modal-title'>
            {buttonLabel === 'Invite new users'
              ? 'Users settings'
              : buttonLabel === 'Edit project'
              ? `Edit "${projects[num].name}"`
              : 'Add project'}
          </p>
          <i
            className='fas fa-times modal-close'
            onClick={() => closeModal()}
          ></i>
        </div>
        {buttonLabel === 'Invite new user' ? <UsersModal /> : <ProjectModal />}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<IModalActionsDispatch>) => ({
  setUseModal: () => dispatch(setUseModal()),
  setModal: (action: string) => dispatch(setModal(action)),
});

const mapStateToProps = (state: IRootReducerState) => ({
  modal: state.modal.modalAction,
  useModal: state.modal.useModal,
  num: state.projects.numProject,
  projects: state.projects.projectsDB,
  buttonLabel: state.projects.buttonLabel,
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
