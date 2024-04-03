import "./App.css";
import React from "react";
import RiderPage from "./pages/RiderPage";
import HomePage from "./pages/HomePage";
import Maps from "./components/Maps";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rider" element={<RiderPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
