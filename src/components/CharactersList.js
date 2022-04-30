import React from 'react';
import CharacterItem from './CharacterItem';

const CharactersList = ({characters, setCharacters, currentCharacter, showOneCharacter}) => {
  console.log(characters)
    return (
      <div>
        {Object.entries(characters).map(([key, character]) => {
          return <CharacterItem
                    key={key}
                    character={character}
                    setCharacters={setCharacters}
                    currentCharacter={currentCharacter}
                    showOneCharacter={showOneCharacter}
                />
        })}
      </div>
    )
}

export default CharactersList;