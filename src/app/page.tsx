"use client";

import GameHeader from "@/component/GameHeader";
import QuizArea from "@/component/QuizArea";
import React, { useState } from "react";


const Home: React.FC = () => {
  const [player, setPlayer] = useState<string | null>(null);

  return (
    <>
      <GameHeader player={""} />
      <QuizArea gameQuiz={[]} step={0} answer={false} onClick={function (index: number): void {
        throw new Error("Function not implemented.");
      } } />
    </>
  );
};

export default Home;
