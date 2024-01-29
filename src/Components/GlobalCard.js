import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

const GlobalCard = ({ image, name, post }) => {
  const cardStyle = {
    background: 'linear-gradient(135deg, #00e6ac, #0072ff)',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    color: '#fff',
    border: '0px',
  };

  const imgStyle = {
    borderRadius: '50%',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '10px',
  };

  const subTitleStyle = {
    fontSize: '1.1rem',
    fontWeight: 'normal',
    marginBottom: '0',
  };

  return (
    <Fragment>
      <Card className="h-100 p-3 global_card" style={cardStyle}>
        <Card.Body className="mt-3 text-center">
          <img className="cardImg" src={image} alt={name} style={imgStyle} />
          <Card.Title className="cardTitle mt-3" style={titleStyle}>
            {name}
          </Card.Title>
          <Card.Text>
            <h4 className="subTitle" style={subTitleStyle}>
              {
                post.split('|')[0]
              }
            </h4>
            <h4 className="subTitle" style={subTitleStyle}>
              {
                post.split('|')[1]
              }
            </h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default GlobalCard;
