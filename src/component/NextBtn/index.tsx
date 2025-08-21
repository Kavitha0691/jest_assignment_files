import React from "react";
import { IQuizSet } from "@/interfaces/interfaces";

interface Props {
  step: number;
  gameQuiz: IQuizSet[];
  answer: boolean;
  onClick: () => void;
}

const NextBtn: React.FC<Props> = ({ step, gameQuiz, answer, onClick }) => {
  const isLast = step === gameQuiz.length - 1;

  return (
    <button onClick={onClick} disabled={!answer}>
      {isLast ? "See result" : "Next"}
    </button>
  );
};

export default NextBtn;
