import React, { useState } from "react";

import "./EightBall.css";
import Answers from "./answers.json";
import { choice } from "./random";



function eightball({ answers = Answers }){
    const [answer, setAnswer] = useState({
        msg: "Think of a Question",
        color: "black"
    });

    function handleClick(evt) {
        setAnswer(choice(answers));
    }
    return (
        <div
          className="eightball"
          onClick={handleClick}
          style={{ backgroundColor: answer.color }}
      >
        <b>{answer.msg}</b>
      </div>
  );



}