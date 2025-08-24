"use client";

import React, { useState } from "react";
import GameHeader from "../GameHeader";
import ProgressBar from "../ProgressBar";
import QuizArea from "../QuizArea";
import NextBtn from "../NextBtn";
import Result from "../Result";
import { gameQuiz } from "../../data/data";
import { GameBoardProps } from "../../interfaces/interfaces";

const GameBoard: React.FC<GameBoardProps> = ({ player }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const currentQuestion = gameQuiz[step];

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setAnswers([...answers, index]);
  };

  const handleNext = () => {
    if (step === gameQuiz.length - 1) {
      setShowResult(true);
    } else {
      setStep(step + 1);
      setSelected(null);
    }
  };

  const handlePlayAgain = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
    setSelected(null);
  };

  const score = answers.filter((ans, i) => ans === gameQuiz[i].answer).length;

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <GameHeader player={player} />

      {!showResult ? (
        <>
          <div className="mb-2">
            <ProgressBar step={step} gameQuiz={gameQuiz} />
          </div>

          <div className="mb-2">
            <QuizArea
              gameQuiz={gameQuiz}
              step={step}
              answer={selected !== null}
              onClick={handleSelect}
            />
          </div>

          <div className="flex justify-center">
            <NextBtn
              step={step}
              gameQuiz={gameQuiz}
              answer={selected !== null}
              onClick={handleNext}
            />
          </div>
        </>
      ) : (
        <div className="text-center">
          <Result
            rightAnswers={score}
            amountOfAnswers={gameQuiz.length}
            onClick={handlePlayAgain}
          />
        </div>
      )}
    </div>
  );
};

export default GameBoard;
