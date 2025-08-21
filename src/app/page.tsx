"use client";

import GameHeader from "@/component/GameHeader";
import React, { useState } from "react";


const Home: React.FC = () => {
  const [player, setPlayer] = useState<string | null>(null);

  return (
    <>
      <GameHeader player={""} />
    </>
  );
};

export default Home;
