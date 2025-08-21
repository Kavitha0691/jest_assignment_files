"use client";

import React, { useState } from "react";

interface Props {
  setPlayer: (name: string) => void;
}

const CreatePlayer: React.FC<Props> = ({ setPlayer }) => {
  const [name, setName] = useState("");

  return (
    <div data-testid="createPlayer">
      <label htmlFor="playerName">Pick a name</label>
      <input
        id="playerName"
        aria-label="pick a name"
        value={name}
        maxLength={15}   //  "should only take 15 characters" test
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setPlayer(name)} disabled={name.trim().length < 3}>
        Start Game
      </button>
    </div>
  );
};

export default CreatePlayer;
