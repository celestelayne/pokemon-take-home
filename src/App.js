import React, { useState } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header';
import CharactersList from './components/CharactersList';
import CharacterDetailPage from './components/CharacterDetailPage';

import './App.css';

const data = require('./pokemons.json');

function App() {

  const initialCharacterState = {
    id: null,
    name: '',
    classification: ''
  }

  const [currentCharacter, setCurrentCharacter] = useState(initialCharacterState)
  const [characters, setCharacters] = useState(data);

  const  [ filteredCharacters, setfilteredCharacters ]= useState({})
  const [ searchCharacter, setSearchCharacter ] = useState("");

  const showOneCharacter = async character => {
    setCurrentCharacter({
      id: character.id,
      name: character.name,
      classification: character.classification
    })
    console.log(character)
  }

  const updateSearchInput = input => {

    console.log(input)

    let filtered = filteredCharacters && filteredCharacters.filter(filteredCharacter => {
      return filteredCharacter.name.includes(input)
    })

    setSearchCharacter(input)
    searchCharacter(filtered)
  }
  
  return (
    <div className="container">
        <Header/>
        <Routes>
          <Route 
            exact path='/' 
            element={<CharactersList 
              characters={characters}
              setCharacters={setCharacters}
              showOneCharacter={showOneCharacter}
              searchCharacter={searchCharacter} 
              updateSearchInput={updateSearchInput}
            />} 
          />
          <Route 
            path='/:name' 
            element={ <CharacterDetailPage 
              characters={characters}
              setCharacters={setCharacters}
              currentCharacter={currentCharacter} 
          /> }/>
        </Routes>
    </div>
  );
}

export default App;
