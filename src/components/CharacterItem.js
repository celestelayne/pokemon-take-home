import React from 'react';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components'

import FavoriteBtn from './FavoriteBtn'

const CharacterCards = styled.div`
  flex: 1 0 20%;
  margin: 5px;
  min-height: 100%;
  border: 1px solid black;
`

const Header = styled.div`
  height: 50vh;
  padding: 20px;
`

const Image = styled.img`
  height: 100%;
`

const Footer = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: lemonchiffon;
`

const CharacterItem = ({
  character, 
  handleDetailsClick, 
  isFavorite, 
  toggleFavorite 
}) => {

  if (!character) {
    // maybe loader
    return null;
  }

  let image = `https://img.pokemondb.net/artwork/${character.name.toLowerCase().replace(/[&\\/\\\\#,+()$~%.'":*?<>{}]/g, '').replace(' ', '-')}.jpg`;

  return (
    <CharacterCards className="character-card">
      <Header className="character-header">
        <Image src={image} />
      </Header>
      <Footer className="character-footer">
        <Link 
          to={`/${character.name}`}
          onClick={() => handleDetailsClick(character)}
        >{character.name}</Link>
        <p>{character.types}</p>
        <FavoriteBtn 
          onClick={() => toggleFavorite(character.id)}
          favorite={isFavorite(character.id)} />
          </Footer>
    </CharacterCards>
  )
}

export default CharacterItem;