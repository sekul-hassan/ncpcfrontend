import React from 'react';

const InfoDiv = ({ info, gradient }) => {
  const infoStyle = {
    padding: "10px",
    borderRadius: '5px',
    background: gradient || 'linear-gradient(45deg, #8BC34A 30%, #CDDC39 90%)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    textAlign: "center",
    cursor: 'default',
    fontSize: "18px",
  };

  return (
    <div className='title text-white' style={infoStyle}>
      {info}
    </div>
  );
};

export default InfoDiv;
