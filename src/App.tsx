import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Refferal from "./Components/Refferal/Refferal";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectAndMint from "./Components/ConnectAndMint/ConnectAndMint";
import LandingAnimation from "./Components/LandingAnimation/LandingAnimation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/ranks"
            element={
              <>
                <Navbar type="light" />
                <Refferal />
                <Leaderboard />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
               <LandingAnimation />
                <Navbar type="dark" />
                <ConnectAndMint />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
