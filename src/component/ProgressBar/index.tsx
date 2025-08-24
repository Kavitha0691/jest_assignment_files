import React from "react";
import { IQuizSet, ProgressBarProps } from "@/interfaces/interfaces";

const ProgressBar: React.FC<ProgressBarProps> = ({ step, gameQuiz }) => {
  return (
    <>
      <div className="w-full" >
        <progress role="progressbar" value={step} max={gameQuiz.length} className="w-full h-6 rounded-lg bg-gray-50 overflow-hidden"></progress>
        <p className=" text-sm text-gray-700 text-right">{`${step} / ${gameQuiz.length}`}</p>
      </div>
    </>
  );
};

export default ProgressBar;
