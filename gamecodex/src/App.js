import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";

const App = (props) => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
