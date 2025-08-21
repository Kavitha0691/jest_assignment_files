import React from "react";
import { IQuizSet } from "@/interfaces/interfaces";

interface Props {
  step: number;
  gameQuiz: IQuizSet[];
}

const ProgressBar: React.FC<Props> = ({ step, gameQuiz }) => {
  return (
    <div>
      <progress role="progressbar" value={step} max={gameQuiz.length}></progress>
      <p>{`${step} / ${gameQuiz.length}`}</p>
    </div>
  );
};

export default ProgressBar;
