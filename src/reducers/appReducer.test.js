import reducer from './appReducer';

describe('app reducer', () => {
  it('toggles the theme from light to dark', () => {
    const state = {
      theme: 'light'
    };

    const action = {
      type: 'TOGGLE_THEME'
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
      type: 'TOGGLE_THEME'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      theme: 'light'
    });
  });
});
