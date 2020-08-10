import React from 'react';
import { useCharacter } from '../Hooks/appContext';

const Character = () => {
  const characters = useCharacter();

  const characterElements = characters.map(( character ) => (
    <li key={character.id}>
      <p>{character.name}-{character.species}</p>
      <img src={character.image} alt={character.name} />
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

export default Character;
