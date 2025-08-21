import React from "react";

interface Props {
  player: string;
}

const GameHeader: React.FC<Props> = ({ player }) => {
  return (
    <header role="banner">
      <h3>Coffee Quiz</h3>
      <p>{player}</p>
    </header>

  );
};

export default GameHeader;