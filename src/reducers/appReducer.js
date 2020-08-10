export const initialState = {
  characters: [],
  page: 1,
  theme: 'light'
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload };
      case 'NEXT_PAGE':
      return { ...state, page: state.page + 1 };
      case 'PREVIOUS_PAGE':
        return { ...state, page: state.page - 1 };
      case 'THEME':
        return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
      default:
        return state;
  }
  
}