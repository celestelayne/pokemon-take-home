import React from 'react';

import {
  Link
} from "react-router-dom";

const CharacterItem = ({character, showOneCharacter}) => {
  console.log(character)
  if (character !== undefined) {
    return (
      <div>
        <Link 
          to={`/${character.name}`}
          onClick={() => showOneCharacter(character)}
        >{character.name}</Link>
      </div>
    )
  }
  
  

}

export default CharacterItem;