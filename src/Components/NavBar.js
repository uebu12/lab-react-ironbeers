import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <NavLink
        to="/"
        className="nav-item nav-link"
        activeClassName="active"
      ></NavLink>
    </nav>
  );
}

export default NavBar;
