import React from 'react';

function CharacterDetailPage({currentCharacter}) {

  console.log(currentCharacter);

  let image = `https://img.pokemondb.net/artwork/${currentCharacter.name.toLowerCase().replace(/[&\\/\\\\#,+()$~%.'":*?<>{}]/g, '').replace(' ', '-')}.jpg`;

  return(
    <>
      <img src={image} />
    </>
  )
}

export default CharacterDetailPage;