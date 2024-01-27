import React from 'react';

const CustomButton = ({ buttonText }) => {
  const buttonStyle = {
    background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'default',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
      <div>
        <button style={buttonStyle}>{buttonText}</button>
      </div>
  );
};

export default CustomButton;
