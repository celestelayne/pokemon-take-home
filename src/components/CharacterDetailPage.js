import React from 'react';
import { GiSpeaker } from "react-icons/gi";

import styled from 'styled-components'

const Content = styled.div`
  height: 20vh;
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
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
  
  let sound = process.env.PUBLIC_URL + `/assets/sounds/${parseInt(currentCharacter.id, 10)}.mp3`;
  const audio = new Audio(sound)

  let evolutionImage;
  if(currentCharacter.evolutions){
    evolutionImage =  currentCharacter.evolutions.map((evolution, index) => {
      let image = `https://img.pokemondb.net/artwork/${evolution.name.toLowerCase().replace(/[&\\/\\\\#,+()$~%.'":*?<>{}]/g, '').replace(' ', '-')}.jpg`;
      return (   
        <div className="character-evolutions" key={index} >
          <img src={image} />
          <h3 className="evolutions-footer">{evolution.name}</h3>
        </div>
      )
    })
  }

  return (
    <>
    <div className="character-details">
      <Image className="character-header">
        <img className="character-image" src={image} />
        <button className="character-audio" onClick={() => audio.play()}>
          <GiSpeaker/>
        </button>
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

    
    <div className="evolutions-details">
      <h3 className="evolutons-header">Evolutions</h3>
      <div className="evolutions-grid">
        {evolutionImage}
      </div>
    </div>
    </>
  )
}

export default CharacterDetailPage;