import { SET_SEARCH_FIELD, TOGGLE_BUTTON } from './users.constants';

interface ISetSearchField {
  type: typeof SET_SEARCH_FIELD;
  payload: string;
}

const setSearchField = (input: string) => ({
  type: SET_SEARCH_FIELD,
  payload: input,
});

interface IToggleButton {
  type: typeof TOGGLE_BUTTON;
}

const toggleButton = () => ({
  type: TOGGLE_BUTTON,
});

export type IUsersReducerActions = ISetSearchField & IToggleButton;
export type IUsersActionsDispatch = ISetSearchField | IToggleButton;

export { setSearchField, toggleButton };
