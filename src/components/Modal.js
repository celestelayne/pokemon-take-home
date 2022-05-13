import React from 'react';
import styled from 'styled-components';

const ViewModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  margin: 10px auto;
  padding: 15px 30px;
  text-transform: uppercase;
  text-align: center;
`;

function Modal({ showModal, onClose, modalCharacter }) {
  
  if(!showModal) return null;

  return (
    <ViewModal className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{modalCharacter.name}</h2>
          <p>
            {modalCharacter.types.map((type, index) => {
              return <span className="character-list-type" key={index}>{type},</span>
            })} 
          </p>
        </div>
        <div className="modal-body">
          <p><span className="modal-info">Weight:</span> {modalCharacter.weight.minimum} &mdash; {modalCharacter.weight.maximum}</p>
          <p><span className="modal-info">Height:</span> {modalCharacter.height.minimum} &mdash; {modalCharacter.height.maximum}</p>
          <div className="combat">
            <div className="combat-power"></div>
            <p className="combat-power-score">CP: {modalCharacter.maxCP}</p>
          </div>
          <div className="hit">
            <div className="hit-power"></div>
            <p className="hit-power-score">HP: {modalCharacter.maxHP}</p>
          </div>
          <div className="resistant">
            <p><span className="modal-info">Resistant:</span> 
              {modalCharacter.resistant.map((item, index) => {
                return <span className="character-list-type" key={index}> {item},</span>
              })} 
            </p>
          </div>
          <div className="weaknesses">
            <p><span className="modal-info">Weaknesses:</span>
              {modalCharacter.weaknesses.map((weakness, index) => {
                return <span className="character-list-type" key={index}> {weakness},</span>
              })} 
            </p>
          </div>
          <div className="attacks">
            <p><span className="modal-info">Fast Attacks:</span>
              {modalCharacter.attacks.fast.map((attack, index) => {
                return <span className="character-list-type" key={index}> {attack.name},</span>
              })} 
            </p>
          </div>

          <div className="attacks">
            <p><span className="modal-info">Special Attacks:</span>
              {modalCharacter.attacks.special.map((attack, index) => {
                return <span className="character-list-type" key={index}> {attack.name},</span>
              })} 
            </p>
          </div>

        </div>
        <div className="modal-footer">
          <Button className="modal-button" onClick={onClose}>Close</Button>
        </div>
      </div>
    </ViewModal>
  )
}

export default Modal;