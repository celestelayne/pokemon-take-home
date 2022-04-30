import React, {useState} from 'react';

import CharacterItem from './CharacterItem';
import Searchbar from './Searchbar'

const CharactersList = ({characters, setCharacters, currentCharacter, showOneCharacter }) => {

    console.log(characters)

    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("")

    //===== SEARCH FEATURE
    const handleSearchChange = e => {
      e.preventDefault()
      const searchQuery = e.target.value && e.target.value.toLowerCase();
      // console.log(searchQuery)
      setSearchTerm(searchQuery);
    };

    const searched = !searchTerm
    ? characters
    : characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const types = Object.entries(characters).map(type => {
      let arrays = type[1].types;

      for(let ele of arrays){
        return [...ele].join('').replace(' ', '')
      }
    })
    const characterTypes = [...new Set(types)]

    //===== FILTER FEATURE
    const handleFilterChange = e => {
      e.preventDefault()
      const filterQuery = e.target.value;
      console.log(filterQuery)
      // setFilterType(filterQuery)
    }

    return (
      <>
        <Searchbar searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
        <div>
          <select onChange={handleFilterChange}>
            <option value="type">Type</option>
          {characterTypes && characterTypes.map(type => {
            return ( 
                <option value={type}>{type}</option>
            )
          })}
          </select>
        </div>
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

