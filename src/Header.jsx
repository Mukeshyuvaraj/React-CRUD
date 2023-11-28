import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className='header'>
        {props.heading}
    </div>
  )
}

export default Header;
