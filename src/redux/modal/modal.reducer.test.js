import { SET_MODAL, SET_USE_MODAL } from './modal.constants';
import modalReducer from './modal.reducer';

describe('Modal reducer testing', () => {
  const INITIAL_STATE = {
    modalAction: '',
    useModal: false,
  };

  it('Should return the initial state', () => {
    expect(modalReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('Should handle SET_USE_MODAL action', () => {
    const expectedState = {
      modalAction: '',
      useModal: true,
    };

    expect(modalReducer(INITIAL_STATE, { type: SET_USE_MODAL })).toEqual(
      expectedState
    );
  });

  it('Should handle SET_MODAL action', () => {
    const expectedState = {
      modalAction: 'add-user',
      useModal: false,
    };

    expect(
      modalReducer(INITIAL_STATE, {
        type: SET_MODAL,
        payload: 'add-user',
      })
    ).toEqual(expectedState);
  });
});
