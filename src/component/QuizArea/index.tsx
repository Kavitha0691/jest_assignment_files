import React from "react";
import { IQuizSet, QuizAreaProps } from "@/interfaces/interfaces";

const QuizArea: React.FC<QuizAreaProps> = ({ gameQuiz, step, answer, onClick }) => {
  const { question, alternatives, answer: correctIndex } = gameQuiz[step];

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{question}</h3>
      <ul className="space-y-3 text-xl">
        {alternatives.map((alt, i) => {
          let className = "idle";
          if (answer) {
            className =
              i === correctIndex
                ? "bg-green-500 text-black text-xl font-bold"
                : "bg-red-50 text-balck";
          }

          return (
            <li key={i} data-testid="alternative-item" className={`rounded-lg overflow-hidden`}>
              <button onClick={() => onClick(i)} disabled={answer} className={`w-full text-left px-4 py-2 transition-colors ${className} hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-70`}>
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
