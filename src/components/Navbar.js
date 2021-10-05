import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    text: 'Missions',
  },
  {
    id: 3,
    path: '/my-profile',
    text: 'My Profile',
  },
];

const Navbar = () => (
  <nav>
    <ul className="d-flex ps-0">
      {links.map((link) => (
        <li key={link.id} className="mx-4">
          <NavLink to={link.path} activeClassName="displaying" exact>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
