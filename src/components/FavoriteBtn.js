import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const FavoriteBtn = ({ onClick, favorite }) => {

  const icon = favorite ? <FaHeart /> : <FaRegHeart />

  return(
    <button 
      className={`pokemon-favorite ${favorite}`} 
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default FavoriteBtn;