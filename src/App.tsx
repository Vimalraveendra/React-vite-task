import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home.component";
import GameBoard from "./components/GameBoard/GameBoard.component";
import GameResults from "./components/GameResults/GameResults.component";

import "./App.css";

const App = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/game_start" element={<GameBoard />} />
      <Route path="/game_end" element={<GameResults />} />
    </Routes>
  );
};

export default App;
