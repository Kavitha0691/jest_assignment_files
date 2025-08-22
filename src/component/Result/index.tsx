import React from "react";
import { IResult } from "@/interfaces/interfaces";

const Result: React.FC<IResult> = ({ rightAnswers, amountOfAnswers, onClick }) => {
  return (
    <div data-testid="result">
      <h2>{`${rightAnswers} of ${amountOfAnswers} right answers!`}</h2>
      <button onClick={onClick}>Play again</button>
    </div>
  );
};

export default Result;
