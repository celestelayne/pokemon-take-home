import React from 'react';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components'

import FavoriteBtn from './FavoriteBtn'

const CharacterCards = styled.div`
  // flex: 1 0 20%;
  // margin: 5px;
  min-height: 100%;
  border: 1px solid #e2e2e2;
`

const Header = styled.div`
  height: 50vh;
  padding: 20px;
`

const Image = styled.img`
  width: 100%;
  object-fit: scale-down;
`

const Footer = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #f3f3f3;
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
      <Footer className="character-list-view-footer">
        <div className="character-text">
          <Link 
              className="character-list-title"
              to={`/${character.name}`}
              onClick={() => handleDetailsClick(character)}
            ><h3>{character.name}</h3></Link>
            {character.types.map((type, index) => {
              return <span className="character-list-type" key={index}>{type}</span>
          })} 
        </div>
        <div className="character-icon">
          <span className="favorite-icon">
          <FavoriteBtn 
            onClick={() => toggleFavorite(character.id)}
            favorite={isFavorite(character.id)} />
          </span>
        </div>
      </Footer>
    </CharacterCards>
  )
}

export default CharacterItem;