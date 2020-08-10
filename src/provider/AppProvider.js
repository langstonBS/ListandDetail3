import React, { useReducer } from 'react';
import { useEffect } from 'react';
import reducer, { initialState } from '../reducers/appReducer';
import { fetchCharacter } from '../servases/rickandMorty';
import {AppContext} from '../components/Hooks/appContext';

 const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   console.log(initialState)
  
   useEffect(() => {
    fetchCharacter(state.page)
      .then(characters => dispatch({ type: 'SET_CHARACTERS', payload: characters }));
   }, [state.page]);
   console.log(state.page)

   return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

