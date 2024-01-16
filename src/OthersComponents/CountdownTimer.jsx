
import React, { useEffect, useState,Fragment } from 'react';
import { Container } from 'react-bootstrap';

const CountdownTimer = ({ initialValue, targetValue, speed }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= targetValue) {
        clearInterval(interval);
      } else {
        setCount(prevCount => prevCount + 1);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [count, speed, targetValue]);

  return (
    <Fragment>    
      <Container  className="timer-container">
      <Container className="timer-circle text-center">{count}+</Container>
    </Container>
    </Fragment>

  );
};

export default CountdownTimer;
