import { setModal, setUseModal } from './modal.actions';
import { SET_MODAL, SET_USE_MODAL } from './modal.constants';

describe('Modal actions testing', () => {
  it('Should create an action to toggle modal', () => {
    const expectedState = {
      type: SET_USE_MODAL,
    };

    expect(setUseModal()).toEqual(expectedState);
  });

  it('Should create an action to change type of modal', () => {
    const expectedState = {
      type: SET_MODAL,
      payload: 'Edit project',
    };

    expect(setModal('Edit project')).toEqual(expectedState);
  });
});
