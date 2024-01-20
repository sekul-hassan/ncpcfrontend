import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Countdown from "./Countdown";
import Typing from "./Typing";

const CountCalculation = ({ day }) => {
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const currentTime = new Date();
      const currentYear = currentTime.getFullYear();

      let birthdayDay = new Date(currentYear, currentTime.getMonth(), day, 0, 0, 0);

      // if (currentTime > birthdayDay) {
      //   // If the birthday has already passed this year, set it for the next year
      //   birthdayDay.setFullYear(currentYear + 1);
      // }

      const timeRemaining = birthdayDay.getTime() - currentTime.getTime();

      if (timeRemaining <= 0) {
        // Birthday has passed, stop the countdown
        setState((prevState) => ({
          ...prevState
        }));
        return;
      }

      const totalDaysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setState({
        seconds,
        minutes,
        hours,
        days: totalDaysRemaining,
        isItBday: false,
      });
    };

    // Set up the interval to update the countdown every second
    const intervalId = setInterval(countdown, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [day]);

  return (
      <Container fluid="true" className="page">
        <div>
          <h5 className="ncpcType">NCPC 2023</h5>
        </div>
        <div className="typing">
          <Typing />
        </div>
        <Countdown countdownData={state} />
        <div className="caption">
          <h5 className="type">Hosted By</h5>
          <h5 className="deptInfo">
            Department of Computer Science and Engineering
          </h5>
          <h4 className="deptInfo">Jahangirnagar University</h4>
        </div>
      </Container>
  );
};

export default CountCalculation;
