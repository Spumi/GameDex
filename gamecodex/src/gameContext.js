import React from "react";

const GameContext = React.createContext({ gameId: null });
export const PageProvider = GameContext.Provider;
export default GameContext;
