export const initialState = {
  characters: [],
  page: 1,
  text: '',
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTERS':
      console.log('im here')
      return { ...state, characters: action.payload };
      default:
        return state;
  }
  
}