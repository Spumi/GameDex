import React from "react";

const GameContext = React.createContext({ gameId: null });
export const GameProvider = GameContext.Provider;
export default GameContext;
