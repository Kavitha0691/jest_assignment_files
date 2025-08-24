import React from "react";
import { IQuizSet, NextBtnProps } from "@/interfaces/interfaces";

const NextBtn: React.FC<NextBtnProps> = ({ step, gameQuiz, answer, onClick }) => {
  const isLast = step === gameQuiz.length - 1;

  return (
    <button onClick={onClick} disabled={!answer} className={`px-6 py-2 rounded-lg font-medium transition-colors 
        ${answer
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}>
      {isLast ? "See result" : "Next"}
    </button>
  );
};

export default NextBtn;
