import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import Searchbar from './Searchbar';
import FilterDropdown from './FilterDropdown';

import { FaList } from 'react-icons/fa';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // height: 10vh;
  padding: 10px;
  // border: 1px solid #000000;
  color: #141414;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  // height: 5vh;
`

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  // height: 5vh;
`

const StyledLink = styled(Link)`
  color: #f4f4f4;
  background-color: #141414;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #f4f4f4;
  text-decoration: none;
`

const Header = ({ 
  setFilter, 
  characterTypes, 
  handleFilterChange, 
  characters, 
  favorites, 
  searchTerm, 
  handleSearchChange 
}) => {
  
const handleFilterClick = (filter) => {
  console.log("Setting filter to " + filter)
  setFilter(filter)
}

  return (
    <HeaderWrapper>

        <Navigation>
          <StyledLink 
            onClick={() => handleFilterClick('all')} 
            to={'/'}>All</StyledLink>
          <StyledLink 
            onClick={() => handleFilterClick('favorites')} 
            to={'/favorites'}>Favorites &nbsp; <span>{favorites.length}</span></StyledLink>
            
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
          <FaList />
        </SubHeader>

    </HeaderWrapper>
  )
}

export default Header;
