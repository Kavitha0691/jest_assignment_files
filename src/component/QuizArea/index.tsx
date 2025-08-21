import React from "react";
import { IQuizSet } from "@/interfaces/interfaces";

interface Props {
  gameQuiz: IQuizSet[];
  step: number;
  answer: boolean;
  onClick: (index: number) => void;
}

const QuizArea: React.FC<Props> = ({ gameQuiz, step, answer, onClick }) => {
  const { question, alternatives, answer: correctIndex } = gameQuiz[step];

  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {alternatives.map((alt, i) => {
          let className = "idle";
          if (answer) {
            className = i === correctIndex ? "correct" : "wrong";
          }

          return (
            <li key={i} data-testid="alternative-item" className={className}>
              <button onClick={() => onClick(i)} disabled={answer}>
                {alt}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuizArea;
