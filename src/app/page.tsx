"use client";

import GameHeader from "@/component/GameHeader";
import NextBtn from "@/component/NextBtn";
import ProgressBar from "@/component/ProgressBar";
import QuizArea from "@/component/QuizArea";
import Result from "@/component/Result";
import React, { useState } from "react";


const Home: React.FC = () => {
  const [player, setPlayer] = useState<string | null>(null);

  return (
    <>
      <GameHeader player={""} />
      <QuizArea gameQuiz={[]} step={0} answer={false} onClick={function (index: number): void {
        throw new Error("Function not implemented.");
      } } />
      <NextBtn step={0} gameQuiz={[]} answer={false} onClick={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <ProgressBar step={0} gameQuiz={[]} />
      <Result rightAnswers={0} amountOfAnswers={0} onClick={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </>
  );
};

export default Home;
