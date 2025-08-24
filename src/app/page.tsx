"use client";

import React, { useState } from "react";
import GameBoard from "@/component/GameBoard";
import CreatePlayer from "@/component/CreatePlayer";

const Home: React.FC = () => {
  const [player, setPlayer] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const handleStart = () => {
    if (inputValue.trim()) {
      setPlayer(inputValue.trim());
    }
  };

  return (
    <>
      {!player ? (
        <CreatePlayer setPlayer={setPlayer} />
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4">
          <main className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6">
            <GameBoard player={player} />
          </main>
        </div>
      )}
    </>
  );
};

export default Home;
