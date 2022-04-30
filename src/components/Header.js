import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import { Searchbar } from './Searchbar';

const HeaderWrapper = styled.div`
  display: flex;
  padding: 20px;
  border: 1px solid #000000;
  color: #141414;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const Header = () => {
    return (
      <HeaderWrapper>
        <Navigation>
          <Link to={'/'}>All</Link>
          <Link to={'/favorites'}>Favorites</Link>
        </Navigation>
      </HeaderWrapper>
    )
}

export default Header;
