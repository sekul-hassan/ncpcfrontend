import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Countdown from "./Countdown";
import Typing from "./Typing";
import {currentEvent} from "../Components/Context/WebConf";

const CountCalculation = () => {

  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
  });

  const currentEventDate= currentEvent.date

  useEffect(() => {
    const countdown = () => {
      const currentTime = new Date();

      let birthdayDay = new Date(currentEventDate);
      // let birthdayDay = new Date(2024, 3, 9, 0, 0, 0);

      const timeRemaining = birthdayDay.getTime() - currentTime.getTime() + 3 * 60 * 60 * 1000
      // const timeRemaining = birthdayDay.getTime() - currentTime.getTime();

      if (timeRemaining <= 0) {
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
      });
    };

    // Set up the interval to update the countdown every second
    const intervalId = setInterval(countdown, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentEventDate]);

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
