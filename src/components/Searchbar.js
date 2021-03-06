import React from 'react';
import styled from 'styled-components'

const Input = styled.input.attrs({
  type: 'text',
})`
  background: #F4F4F4;
  height: 40px;
  width: 100%;
  font-size: 18px;
  border: none;
  padding: 10px;
  cursor: pointer;
  ::placeholder {
    color: #878787;
  },
  :focus {
    outline: none;
  }
`

const Searchbar = ({ searchTerm, handleSearchChange }) => {

  return(
    <div className="character-searchbar">
      <Input
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search"
      />
    </div>
  )
}

export default Searchbar;