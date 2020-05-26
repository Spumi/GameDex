import React, { useState } from "react";
import GameCard from "./GameCard";

function GameList(props) {
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <GameCard />
        </div>
      </div>
    </div>
  );
}

export default GameList;
