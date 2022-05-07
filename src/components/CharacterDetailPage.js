import React from 'react';
import styled from 'styled-components'

import { FaPlayCircle } from 'react-icons/fa';

const Content = styled.div`
  height: 20vh;
  background: yellow;
`

const Footer = styled.div`
  height: 10vh;
  display: flex;
`

const Image = styled.div`
  height: 60vh;
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
        <p>{currentCharacter.name}</p>
        <p>{currentCharacter.types}</p>
      </Content>
      <Footer className="character-footer">
        <div>
          <p>Weight</p>
          <p>{currentCharacter.weight.minimum} &mdash; {currentCharacter.weight.maximum}</p>
        </div>
        <div>
          <p>Height</p>
          <p>{currentCharacter.height.minimum} &mdash; {currentCharacter.height.maximum}</p>
        </div>
      </Footer>
      {children}
    </div>
  )
}

export default CharacterDetailPage;