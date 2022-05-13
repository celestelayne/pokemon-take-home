import React from 'react';

import CharacterItem from './CharacterItem';

const CharactersList = ({ 
  filterType,
  setIsFavorite, 
  handleSearchChange, 
  handleFilterChange,
  characters, 
  setCharacters, 
  currentCharacter, 
  handleDetailsClick, 
  toggleFavorite, 
  isFavorite,
  layoutView,
  showModal,
  setShowModal,
  toggleModal,
  modalCharacter,
  setModalCharacter,
  handleModalClick
}) => {

  return (
    <>
      <div className={`character-${layoutView ? "grid" : "list"}`}>
        {characters.map((character, key) => {
          return <CharacterItem
            key={key}
            layoutView={layoutView}
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite}
            character={character}
            showModal={showModal}
            toggleModal={toggleModal}
            setShowModal={setShowModal}
            modalCharacter={modalCharacter}
            setModalCharacter={setModalCharacter}
            handleModalClick={handleModalClick}
            toggleFavorite={toggleFavorite}
            handleFilterChange={() => handleFilterChange(filterType)} 
            handleSearchChange={() => handleSearchChange(character)} 
            setCharacters={setCharacters}
            currentCharacter={currentCharacter}
            handleDetailsClick={handleDetailsClick}
          />
          })
        }
      </div>
    </>
  )
}

export default CharactersList;

