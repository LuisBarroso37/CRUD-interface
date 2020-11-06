import { SET_SEARCH_FIELD, TOGGLE_BUTTON } from './users.constants';
import usersReducer from './users.reducer';

describe('Users reducer testing', () => {
  const INITIAL_STATE = {
    searchField: '',
    buttonClicked: false,
  };

  it('Should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('Should handle SET_SEARCH_FIELD action', () => {
    const expectedState = {
      searchField: 'abc',
      buttonClicked: false,
    };

    expect(
      usersReducer(INITIAL_STATE, {
        type: SET_SEARCH_FIELD,
        payload: 'abc',
      })
    ).toEqual(expectedState);
  });

  it('Should handle TOGGLE_BUTTON action', () => {
    const expectedState = {
      searchField: '',
      buttonClicked: true,
    };

    expect(usersReducer(INITIAL_STATE, { type: TOGGLE_BUTTON })).toEqual(
      expectedState
    );
  });
});
