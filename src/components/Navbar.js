import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../media/planet.png';

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
  <nav
    className="mx-4 d-flex justify-content-between align-items-center
      py-3 mb-3 border-bottom border-secondary"
  >
    <div className="d-flex align-items-center">
      <img
        src={logo}
        alt="STH Logo"
        className="logo me-2"
      />
      <h1 className="mb-0">Space Traveler's Hub</h1>
    </div>
    <ul className="d-flex ps-0 mb-0 nav-list">
      {links.map((link) => (
        <li key={link.id} className="text-primary">
          <NavLink to={link.path} activeClassName="displaying" exact>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
