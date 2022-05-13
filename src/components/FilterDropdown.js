import React from 'react';
import styled from 'styled-components'

const Select = styled.select`
  width: 100%;
  height: 40px;
  background: #F4F4F4;
  color: #878787;
  appearance:none;
  font-size: 18px;
  border: none;
  padding: 10px;
  option {
    color: black;
    background: white;
    white-space: pre;
  },
  :focus {
    outline: none;
  }
`

const FilterDropdown = ({ characters, handleFilterChange }) => {

  // iterate over character types to populate <options> element
  const types = Object.entries(characters).map(type => {
    let arrays = type[1].types;

    for(let ele of arrays){
      return [...ele].join('').replace(' ', '')
    }
  })

  const characterTypes = [...new Set(types)]

  return(
    <div className="character-filter-dropdown">
      <Select onChange={handleFilterChange}>
        <option value="All">Filter By Type</option>
          {characterTypes && characterTypes.map((type, index) => {
            return ( 
              <option key={index} value={type}>{type}</option>
            )
          })}
      </Select>
    </div>
  )
}

export default FilterDropdown;