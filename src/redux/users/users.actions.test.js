import { setSearchField, toggleButton } from './users.actions';
import { SET_SEARCH_FIELD, TOGGLE_BUTTON } from './users.constants';

describe('Users actions testing', () => {
  it('Should create an action to search users', () => {
    const expectedState = {
      type: SET_SEARCH_FIELD,
      payload: 'ophelia',
    };

    expect(setSearchField('ophelia')).toEqual(expectedState);
  });

  it('Should create an action to toggle button', () => {
    const expectedState = {
      type: TOGGLE_BUTTON,
    };

    expect(toggleButton()).toEqual(expectedState);
  });
});
