import React from 'react';
import "../style/header.scss"
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({setShowSidebar}) => {
  return (
    <header>
      <div className="header-content">
        <div className="mobile-menu-icon">
          <MenuIcon onClick={() => { setShowSidebar(false) }} className='menu-icon' />
        </div>
        <h1>Welcome to the theme switcher app!</h1>
      </div>
    </header>
  );
};

export default Header;
