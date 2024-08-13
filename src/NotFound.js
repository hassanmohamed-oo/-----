import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Page Not Found</p>
      <button className="home-button" onClick={goToHome}>
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
