import React from "react";
import { IResult } from "@/interfaces/interfaces";

const Result: React.FC<IResult> = ({ rightAnswers, amountOfAnswers, onClick }) => {
  return (
    <div data-testid="result" className= "p-8 max-w-2xs mx-auto text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-6">{`${rightAnswers} of ${amountOfAnswers} right answers!`}</h2>
      <button onClick={onClick} className="w-full  py-2 px-4 text-black bg-green-300 rounded-lg hover:bg-green-700 transition">Play again</button>
    </div>
  );
};

export default Result;
