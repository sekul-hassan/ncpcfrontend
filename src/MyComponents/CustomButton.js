import React from 'react';
import { Link } from 'react-router-dom';

const CustomButton = ({ buttonText, linksTo }) => {
  const buttonStyle = {
    background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
      <div>
        <Link to={linksTo}>
          <button style={buttonStyle}>{buttonText}</button>
        </Link>
      </div>
  );
};

export default CustomButton;
