import React from 'react';

function CharacterDetailPage({currentCharacter}) {

  console.log(currentCharacter);

  return(

    <>
      <p>{currentCharacter.name}</p>
    </>
  )
}

export default CharacterDetailPage;