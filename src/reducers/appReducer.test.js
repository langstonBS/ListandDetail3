import reducer from './appReducer';

describe('app reducer', () => {
  it('toggles the theme from light to dark', () => {
    const state = {
      theme: 'light'
    };
    const action = {
      type: 'THEME'
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      theme: 'dark'
    });
  });

  it('toggles the theme from dark to light', () => {
    const state = {
      theme: 'dark'
    };
    const action = {
      type: 'THEME'
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      theme: 'light'
    });
  });

  it('It changes the page up one', () => {
    const state = {
      page: 1
    };
    const action = {
      type: 'NEXT_PAGE'
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      "page": 2
    });
  });

  it('It changes the page down one', () => {
    const state = {
      page: 2
    };
    const action = {
      type: 'PREVIOUS_PAGE'
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({
      "page": 1
    });
  });
});
