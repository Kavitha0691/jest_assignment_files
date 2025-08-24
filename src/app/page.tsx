"use client";

import React, { useState } from "react";
import GameBoard from "@/component/GameBoard";

const Home: React.FC = () => {
  const [player, setPlayer] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const handleStart = () => {
    if (inputValue.trim()) {
      setPlayer(inputValue.trim());
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-200 to-pink-300 p-4">
      {!player ? (
        <div
          data-testid="createPlayer"
          className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Welcome to the Quiz
          </h2>
          <div className="mb-4 text-left">
            <label
              htmlFor="playerName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Pick a name
            </label>
            <input
              id="playerName"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>
          <button
            onClick={handleStart}
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:bg-gray-400"
          >
            Start Game
          </button>
        </div>
      ) : (
        <main className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
          <GameBoard player={player} />
        </main>
      )}
    </div>
  );
};

export default Home;
