import React, { useState } from 'react';
import InfoDiv from './InfoDiv';

const ImageCard = ({ name, designation, imageUrl }) => {
  const cardStyle = {
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '300px',
    margin: '16px',
  }

  const [contentStyle] = useState({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    marginTop: '16px',
  });

  const [imageContainerStyle] = useState({
    width: '100%',
    textAlign: 'center',
  });

  const [roundImageStyle] = useState({
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  });

  const [textContainerStyle] = useState({
    textAlign: 'center',
    marginTop: '12px',
    marginBotton: '12px'
  });

  return (
    <div className='title' style={cardStyle}>
      <div style={contentStyle}>
        <div style={imageContainerStyle}>
          <img style={roundImageStyle} src={imageUrl} alt="Profile" />
        </div>
        <div style={textContainerStyle}>
          <InfoDiv info={designation}/>
          <p style={{ marginTop: "12px", color: '#000' }}>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
