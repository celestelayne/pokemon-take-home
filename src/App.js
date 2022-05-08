import React, { 
  useState, 
  useMemo
} from 'react';
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import styled from 'styled-components'

import Header from './components/Header';
import CharactersList from './components/CharactersList';
import CharacterDetailPage from './components/CharacterDetailPage';
import FavoriteBtn from './components/FavoriteBtn'

import './App.css';

const data = require('./pokemons.json');

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #FFF;
`

function App() {

  const location = useLocation();
  console.log(location)

  const initialCharacterState = {
    id: null,
    name: '',
    weight: '',
    height: '',
    types: '',
    classification: '',
    image: ''
  }

  // pass in the name or id to state
  const [currentCharacter, setCurrentCharacter] = useState(initialCharacterState);
  const [characters, setCharacters] = useState(data);

  const [filter, setFilter] = useState(["all"]);

  // initialize favorite to empty object
  const [favorites, setFavorites] = useState(
    { 12: true }
  );

  // initialize search query to empty string
  const [searchTerm, setSearchTerm] = useState("");

  // set filter type for dropdown list 
  const [filterType, setFilterType] = useState(["All"]);

  //===== SEARCH FEATURE

  const handleSearchChange = e => {
    e.preventDefault()
    const searchQuery = e.target.value && e.target.value.toLowerCase();
    // set the value of useState searchTerm any time the user types in the search box
    setSearchTerm(searchQuery)
  };

  //===== FAVORITES FEATURE
    const toggleFavorite = characterId => {
      let oldState = characterId in favorites ? favorites[characterId] : false

    // https://reactjs.org/docs/hooks-reference.html#functional-updates
    setFavorites((prevState) => {
      return { 
        ...prevState, 
        [characterId]: !oldState,
      };
    });
  }

  const isFavorite = (id) => {
    if (!(id in favorites)) {
      return false;
    }
    //const inState = id in favorites ? favorites.id : false
    return favorites[id] === true
  }

  const handleDetailsClick =  character => {
    setCurrentCharacter({
      id: character.id,
      name: character.name,
      types: character.types,
      weight: character.weight,
      height: character.height,
      classification: character.classification
    })
    console.log("Fetching details for " + character.name)
  }

  const filteredData = useMemo(() => {
    // [1] if pressed favorites --> get favorites w ids that are true and filter list of characters
    if(location.pathname === '/favorites'){
      return Object.entries(favorites)
        .filter(([_id, isFav]) => isFav)
        .map(([key, _val]) => characters.find(character => character.id === key))
    }

    let searchFilterFunction = () => true;
    let filterByTypeFunction = () => true;
    
    // [2] search by text 
    if(searchTerm) {
      searchFilterFunction = character => 
      character.name.toLowerCase().includes(searchTerm.toLowerCase()
    )}

    // [3] filter by character types


    return characters
      .filter(searchFilterFunction)
      .filter(filterByTypeFunction)
  }, [favorites, searchTerm, location ]);
  
  // console.log('L 153:  ', filteredData)

  return (
    <Container className="container">
        <Header 
          filter={filter} 
          setFilter={setFilter} 
          characters={characters} 
          favorites={favorites} 
          searchTerm={searchTerm} 
          handleSearchChange={handleSearchChange} />
        <Routes>
          <Route 
            exact path='/' 
            element={<CharactersList 
              characters={filteredData}
              isFavorite={isFavorite}
              favorites={favorites}
              setCharacters={setCharacters}
              handleDetailsClick={handleDetailsClick}
              toggleFavorite={toggleFavorite}
              onChange={handleSearchChange}
            />} 
          />
          <Route 
            exact path='/favorites' 
            element={<CharactersList 
              characters={filteredData}
              isFavorite={isFavorite}
              favorites={favorites}
              setCharacters={setCharacters}
              handleDetailsClick={handleDetailsClick}
              toggleFavorite={toggleFavorite}
              onChange={handleSearchChange}
            />} 
          />
          <Route 
            path='/:name' 
            element={ <CharacterDetailPage 
              characters={characters}
              setCharacters={setCharacters}
              currentCharacter={currentCharacter} 
          >
            <FavoriteBtn 
              onClick={() => toggleFavorite(currentCharacter.id)}
              favorite={isFavorite(currentCharacter.id)} 
            />
            </CharacterDetailPage> }/>
        </Routes>
    </Container>
  );
}

export default App;
