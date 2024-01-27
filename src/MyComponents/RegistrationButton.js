import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationButton = ({ buttonText, linksTo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    background: "#87CEEB",
    border: 'none',
    color: '#000',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background 0.3s ease-in-out', // Add transition for a smooth effect
  };

  const buttonHoverStyle = {
    background: 'linear-gradient(45deg, #8BC34A 30%, #CDDC39 90%)', // Change to the desired color on hover
  };

  return (
    <div>
      <Link to={linksTo}>
        <button
          style={{ ...buttonStyle, ...(isHovered ? buttonHoverStyle : null) }}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default RegistrationButton;
