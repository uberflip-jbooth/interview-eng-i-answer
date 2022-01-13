import React from 'react';
import { NavLink } from 'react-router-dom';

import '../less/header.less';

export default function Header() {
  return (
    <header>
      <NavLink to='/' className='logo'>
        <div className='img'></div>
      </NavLink>
    </header>
  );
}