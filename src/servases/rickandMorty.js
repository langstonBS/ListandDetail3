

export const fetchCharacter = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(({results} ) => 
      results.map(result => ({
        name: result.name,
        image: result.image,
        gender: result.species
      }))
    );
};