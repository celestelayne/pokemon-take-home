import React, { 
  useState, 
  useMemo
} from 'react';

import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";

import styled from 'styled-components'

import Header from './components/Header';
import CharactersList from './components/CharactersList';
import CharacterDetailPage from './components/CharacterDetailPage';
import FavoriteBtn from './components/FavoriteBtn'

import './App.css';

//===== IMPORT CHARACTER DATA
const data = require('./pokemons.json');

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #FFF;
`

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  const initialCharacterState = {
    id: null,
    name: '',
    weight: '',
    height: '',
    types: '',
    classification: '',
    image: '',
    maxCP: '',
    maxHP: '',
    resistant: '',
    weaknesses: '',
    evolutions: '',
    attacks: ''
  }

  const [characters, setCharacters] = useState(data);

  // pass in the name or id to state
  const [currentCharacter, setCurrentCharacter] = useState(initialCharacterState);

  const [filterType, setFilterType] = useState("All");

  // initialize favorite to empty object
  const [favorites, setFavorites] = useState({}); // this got rid of the undefined in react dev tools 

  // initialize search query to empty string
  const [searchTerm, setSearchTerm] = useState("");
  
  // initialize list vs grid view
  const [layoutView, setLayoutView] = useState("grid");

  // initialize modal feature
  const [showModal, setShowModal] = useState(false);
  const [modalCharacter, setModalCharacter] = useState(initialCharacterState);

  //===== CHARACTER DETAILS
  const handleDetailsClick =  character => {
    setCurrentCharacter({
      id: character.id,
      name: character.name,
      types: character.types,
      weight: character.weight,
      height: character.height,
      maxCP: character.maxCP,
      maxHP: character. maxHP,
      evolutions: character.evolutions,
      classification: character.classification,
      resistant: character.resistant,
      weaknesses: character.weaknesses,
      evolutions: character.evolutions,
      attacks: character.attacks

    })
    console.log("Fetching details for " + character.name)
  }

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
    return favorites[id] === true
  }

  //===== FILTER FEATURE
  const handleFilterChange = e => {
    e.preventDefault();
    const filterQuery = e.target.value;
    console.log(filterQuery) // take this and return only characters with this value
    
    navigate(`?type=${filterQuery}`, { replace: true });

    setFilterType(filterQuery);
  }

  const filteredData = useMemo(() => {

    // [1] if favorites btn pressed --> get favorites w ids that are true then filter list of characters
    if(location.pathname === '/favorites'){
      return Object.entries(favorites)
        .filter(([_id, isFav]) => isFav)
        .map(([key, _val]) => characters.find(character => character.id === key))
    }

    let searchFilterFunction = () => true;
    let filterByTypeFunction = () => true;

    // [2] filter by character type 
    if(filterType !== "All"){
      console.log('filter type: ', filterType)
      filterByTypeFunction = character => 
      character.types.includes(filterType)
    }

    // [3] search by text 
    if(searchTerm) {
      console.log('search term: ', searchTerm)
      searchFilterFunction = character => 
      character.name.toLowerCase().includes(searchTerm.toLowerCase()
    )} 

    return characters
      .filter(searchFilterFunction)
      .filter(filterByTypeFunction)

  }, [ favorites, searchTerm, location, filterType ]);
  
  //===== MODAL FEATURE
  const handleModalClick = character => {
    setModalCharacter({
      id: character.id,
      name: character.name,
      types: character.types,
      weight: character.weight,
      height: character.height,
      maxCP: character.maxCP,
      maxHP: character. maxHP,
      classification: character.classification,
      resistant: character.resistant,
      weaknesses: character.weaknesses,
      evolutions: character.evolutions,
      attacks: character.attacks
    })
    setShowModal(true);
    console.log(`fetching modal details for : ${character.name}`);
  }

  return (
    <Container className="container">
        <Header 
          layoutView={layoutView}
          setLayoutView={setLayoutView}
          characters={characters} 
          favorites={favorites} 
          searchTerm={searchTerm} 
          handleSearchChange={handleSearchChange}
          handleFilterChange={handleFilterChange} 
        />
        <Routes>
          <Route 
            exact path='/' 
            element={<CharactersList 
              characters={filteredData}
              showModal={showModal}
              filterType={filterType}
              setShowModal={setShowModal}
              modalCharacter={modalCharacter}
              handleModalClick={handleModalClick}
              setModalCharacter={setModalCharacter}
              isFavorite={isFavorite}
              favorites={favorites}
              setCharacters={setCharacters}
              handleDetailsClick={handleDetailsClick}
              toggleFavorite={toggleFavorite}
              onChange={handleSearchChange}
              handleFilterChange={handleFilterChange}
              layoutView={layoutView}
              setLayoutView={setLayoutView}
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
              layoutView={layoutView}
              setLayoutView={setLayoutView}
            />} 
          />
          <Route 
            path='/:name' 
            element={ <CharacterDetailPage 
              characters={characters}
              setCharacters={setCharacters}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
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
