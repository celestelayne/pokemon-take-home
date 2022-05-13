import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import Searchbar from './Searchbar';
import FilterDropdown from './FilterDropdown';

import { FaBars, FaThLarge } from 'react-icons/fa';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: #141414;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 5px;
`

const SubHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

const StyledLink = styled(Link)`
  color: #f4f4f4;
  background-color: #84BFA3;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #f4f4f4;
  text-decoration: none;
`

const Header = ({ 
  characterTypes, 
  handleFilterChange, 
  characters, 
  setCharacters,
  searchTerm, 
  handleSearchChange,
  setLayoutView
}) => {

  return (
    <HeaderWrapper>

        <Navigation>
          <StyledLink 
            to={'/'}
            onClick={() => setCharacters(characters)}>All</StyledLink>
          <StyledLink to={'/favorites'}>Favorites</StyledLink>
        </Navigation>

        <SubHeader>
          <Searchbar 
            searchTerm={searchTerm} 
            handleSearchChange={handleSearchChange}
          />
          <FilterDropdown 
            characters={characters}
            characterTypes={characterTypes} 
            handleFilterChange={handleFilterChange}
          />
          <div className="character-layout">
            <button 
              onClick={() => setLayoutView(false)}
              to="/"><FaBars /></button>
              
            <button 
              onClick={() => setLayoutView(true)}
              to="/"><FaThLarge/></button>
          </div>
        </SubHeader>

    </HeaderWrapper>
  )
}

export default Header;
