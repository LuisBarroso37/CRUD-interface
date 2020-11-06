import { SET_MODAL, SET_USE_MODAL } from './modal.constants';

interface ISetModalAction {
  type: typeof SET_MODAL;
  payload: string;
}

interface ISetUseModalAction {
  type: typeof SET_USE_MODAL;
}

export type IModalReducerActions = ISetModalAction & ISetUseModalAction;
export type IModalActionsDispatch = ISetModalAction | ISetUseModalAction;

const setModal = (action: string) => ({
  type: SET_MODAL,
  payload: action,
});

const setUseModal = () => ({
  type: SET_USE_MODAL,
});

export { setModal, setUseModal };
