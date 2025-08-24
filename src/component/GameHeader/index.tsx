import { GameHeaderProps } from "../../interfaces/interfaces";
import React from "react";

const GameHeader: React.FC<GameHeaderProps> = ({ player }) => {
  return (
    <header role="banner" className="flex flex-col justify-between items-center bg-red-200 p-6 rounded-lg mb-6 shadow-md">
      <h3 className="text-3xl font-bold text-gray-900">Coffee Quiz</h3>
      <p className="mt-4 md:mt-0 text-xl text-gray-700">{player}</p>
    </header>

  );
};

export default GameHeader;