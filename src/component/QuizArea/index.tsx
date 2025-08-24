import React from "react";
import { IQuizSet, QuizAreaProps } from "../../interfaces/interfaces";

const QuizArea: React.FC<QuizAreaProps> = ({ gameQuiz, step, answer, onClick }) => {
  const { question, alternatives, answer: correctIndex } = gameQuiz[step];

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{question}</h3>
      <ul className="space-y-3 text-xl">
        {alternatives.map((alt, i) => {
          let className = "idle";
          if (answer) {
            className = i === correctIndex ? "correct" : "wrong";
          }

          const tailwindClasses = "rounded-lg overflow-hidden";

          return (
            <li
              key={i}
              data-testid="alternative-item"
              className={`${className} ${tailwindClasses}`}
            >
              <button
                onClick={() => onClick(i)}
                disabled={answer}
                className={`w-full text-left px-4 py-2 transition-colors
                  ${i === correctIndex && answer ? "bg-green-500 text-black font-bold" : ""}
                  ${i !== correctIndex && answer ? "bg-red-100 text-black" : ""}
                 
                `}
              >
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
