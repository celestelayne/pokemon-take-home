import React from 'react';
import styled from 'styled-components'

const Select = styled.select`
  width: 100%;
  height: 40px;
  background: #F4F4F4;
  font-size: 18px;
  border: none;
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

  const types = Object.entries(characters).map(type => {
    let arrays = type[1].types;

    for(let ele of arrays){
      return [...ele].join('').replace(' ', '')
    }
  })

  const characterTypes = [...new Set(types)]

  return(
    <div className="character-filter-dropdown">
      {/* basic select input that sets the value to the selected value*/}
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