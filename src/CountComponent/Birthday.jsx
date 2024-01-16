import React, { useState, useEffect } from "react";
import {Container} from "react-bootstrap";
import Countdown from "./Countdown";
import Typing from "./Typing";


const Birthday = ({ day, month }) => {
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItBday: false,
  });

  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  const isItBday =
    currentTime.getDate() === day && currentTime.getMonth() === month - 1;

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        const dateAtm = new Date();
        let birthdayDay = new Date(currentYear, month - 1, day);
        if (dateAtm > birthdayDay) {
          birthdayDay = new Date(currentYear + 1, month - 1, day);
        } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
          birthdayDay = new Date(currentYear, month - 1, day);
        }

        const currentTime = dateAtm.getTime();
        const birthdayTime = birthdayDay.getTime();
        const timeRemaining = birthdayTime - currentTime;
        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItBday,
        }));
      };
      if (!isItBday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItBday: true,
        }));
      }
    }, 1000);
  }, [currentYear, day, isItBday, month]);

  return (
    <Container fluid="true" className="page">
      <div>
      <h5 className="ncpcType">
         NCPC 2023
      </h5>
      </div>
     
      <div className="typing">
       <Typing />
       {/* Think | Strategize | Code */}
      </div>
      <Countdown countdownData={state}/>
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

export default Birthday;
