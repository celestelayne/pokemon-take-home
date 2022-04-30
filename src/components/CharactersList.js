import React, {useState} from 'react';

import CharacterItem from './CharacterItem';

const CharactersList = ({characters, setCharacters, currentCharacter, showOneCharacter }) => {

  console.log(characters)

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = e => {
    e.preventDefault()
    const searchQuery = e.target.value && e.target.value.toLowerCase();
    console.log(searchQuery)
    setSearchTerm(searchQuery);
  };

  const searched = !searchTerm
  ? characters
  : characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(searched)

    return (
      <>
        <input
          type="text"
          onChange={handleSearchChange}
          placeholder="Search"
        />
          <div>
            {searchTerm !== "" ?
              searched.map((character, key) => {
                return <CharacterItem
                          key={key}
                          character={character}
                          setCharacters={setCharacters}
                          currentCharacter={currentCharacter}
                          showOneCharacter={showOneCharacter}
                      />
              })
              :
              Object.entries(characters).map(([key, character]) => {
                return <CharacterItem
                          key={key}
                          character={character}
                          setCharacters={setCharacters}
                          currentCharacter={currentCharacter}
                          showOneCharacter={showOneCharacter}
                      />
              })} 
          </div>
      </>
    )
}

export default CharactersList;