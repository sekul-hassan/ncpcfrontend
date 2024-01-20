import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import {currentEvent} from "../Components/Context/WebConf";

const Typing = () => {
  const currentEventName = currentEvent.name

  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: ["Think | Strategize | Code", currentEventName, "Register fast"],
      autoStart: true,
      delay: 75,
      typeSpeed: 100,
      backSpeed: 20,
      loop: true,
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  return <div id="typewriter" />;
};

export default Typing;
