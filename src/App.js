import React, { useState } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components'

import Header from './components/Header';
import CharactersList from './components/CharactersList';
import CharacterDetailPage from './components/CharacterDetailPage';

// import './App.css';

const data = require('./pokemons.json');


const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: lemonchiffon;
`

function App() {

  const initialCharacterState = {
    id: null,
    name: '',
    classification: '',
    image: ''
  }

  const [currentCharacter, setCurrentCharacter] = useState(initialCharacterState)
  const [characters, setCharacters] = useState(data);

  const showOneCharacter = async character => {
    setCurrentCharacter({
      id: character.id,
      name: character.name,
      classification: character.classification
    })
    console.log(character)
  }
  
  return (
    <Container className="container">
        <Header />
        <Routes>
          <Route 
            exact path='/' 
            element={<CharactersList 
              characters={characters}
              setCharacters={setCharacters}
              showOneCharacter={showOneCharacter}
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
    </Container>
  );
}

export default App;
