import React from 'react';
import { useCharacter } from '../Hooks/appContext';
import styles from './Character.css'

const Character = () => {
  const characters = useCharacter();

  const characterElements = characters.map((character) => (
    <section className={styles.Body}>
    <li key={character.id}>
      <p>{character.name}-{character.species}</p>
      <img src={character.image} alt={character.name} />
      </li>
    </section>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

export default Character;
