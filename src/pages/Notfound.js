import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home">Go back to homepage</Link>
    </div>
  );
};

export default NotFound;
