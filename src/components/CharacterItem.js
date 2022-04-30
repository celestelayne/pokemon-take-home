import React from 'react';

import {
  Link
} from "react-router-dom";
import styled from 'styled-components'

const CharacterCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  flex-basis: auto;
`

const CharacterItem = ({character, showOneCharacter}) => {
  // console.log(character)
  if (character !== undefined) {
    return (
      <CharacterCards>
        <Link 
          to={`/${character.name}`}
          onClick={() => showOneCharacter(character)}
        >{character.name}</Link>
      </CharacterCards>
    )
  }
  
  

}

export default CharacterItem;