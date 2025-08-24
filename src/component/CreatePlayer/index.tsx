"use client";

import { CreatePlayerProps } from "../../interfaces/interfaces";
import React, { useState } from "react";

const CreatePlayer: React.FC<CreatePlayerProps> = ({ setPlayer }) => {
  const [name, setName] = useState("");

  const handleStart = () => {
    if (name.trim().length >= 3) {
      setPlayer(name.trim());
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-200 p-4">
      <div
        data-testid="createPlayer"
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center"
      >
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Welcome to the Quiz
        </h1>
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
            aria-label="pick a name"
            value={name}
            maxLength={15}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
        <button
          onClick={handleStart}
          disabled={name.trim().length < 3}
          className="w-full py-2 px-4 mt-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition disabled:bg-gray-400"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default CreatePlayer;
