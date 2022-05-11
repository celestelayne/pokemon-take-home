import React from 'react';
import styled from 'styled-components'

import { FaPlayCircle } from 'react-icons/fa';

const Content = styled.div`
  height: 15vh;
  background: #f3f3f3;
`

const Footer = styled.div`
  height: 10vh;
  display: flex;
  background: #f3f3f3;
`

const Image = styled.div`
  height: 60vh;
  object-fit: cover;
`

function CharacterDetailPage({ currentCharacter, children }) {

  let image = `https://img.pokemondb.net/artwork/${currentCharacter.name.toLowerCase().replace(/[&\\/\\\\#,+()$~%.'":*?<>{}]/g, '').replace(' ', '-')}.jpg`;

  return(
    <div className="character-details">
      <Image className="character-header">
        <img src={image} />
        <div className="character-sound">
          <FaPlayCircle/>
        </div>
      </Image>

      <Content className="character-content">
        <div className="character-content-top">
          <div className="character-text">
            <h2 className="character-title">{currentCharacter.name}</h2>
            <p className="character-type">{currentCharacter.types}</p>
          </div>
          <div className="character-icon">
            <span className="favorite-icon">{children}</span>
          </div>
        </div>
        <div className="character-content-bottom">
          <div className="combat">
            <div className="combat-power"></div>
            <p className="combat-power-score">CP: {currentCharacter.maxCP}</p>
          </div>
          <div className="hit">
            <div className="hit-power"></div>
            <p className="hit-power-score">HP: {currentCharacter.maxHP}</p>
          </div>
        </div>
      </Content>
      
      <Footer className="character-footer">
        <div className="character-footer-left">
          <h3>Weight</h3>
          <p>{currentCharacter.weight.minimum} &mdash; {currentCharacter.weight.maximum}</p>
        </div>
        <div className="character-footer-right">
          <h3>Height</h3>
          <p>{currentCharacter.height.minimum} &mdash; {currentCharacter.height.maximum}</p>
        </div>
      </Footer>

    </div>
  )
}

export default CharacterDetailPage;