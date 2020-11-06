import { Reducer } from 'redux';

import { SET_MODAL, SET_USE_MODAL } from './modal.constants';
import { IModalReducerActions } from './modal.actions';

export interface IModalReducerState {
  modalAction: string;
  useModal: boolean;
}

const INITIAL_STATE: IModalReducerState = {
  modalAction: '',
  useModal: false,
};

const modalReducer: Reducer<IModalReducerState, IModalReducerActions> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case SET_USE_MODAL:
      return {
        ...state,
        useModal: !state.useModal,
      };
    case SET_MODAL:
      return {
        ...state,
        modalAction: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
