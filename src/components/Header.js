import React from 'react';
import { Link } from 'react-router-dom';
import { Searchbar } from './Searchbar';

const Header = () => {
    return (
      <header>
        <nav>
          <Link to={'/'}>All</Link>
          <Link to={'/favorites'}>Favorites</Link>
        </nav>
      </header>
    )
}

export default Header;
