import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile/john">Profile (URL Params)</Link></li>
        <li><Link to="/product?category=electronics">Product (Query String)</Link></li>
        <li><Link to="/order" state={{ orderId: 1234 }}>Order (Route State)</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
