import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo">
          <h2>liveNote📚</h2>
        </div>
      </Link>

      <div className="right-nav">
        <ul>
          <li>Github</li>
          <li>Twitter</li>
        </ul>
      </div>
    </nav>
  );
};
