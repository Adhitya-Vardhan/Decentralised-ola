import "./App.css";
import React, { useState } from "react";
import RiderPage from "./pages/RiderPage";
import HomePage from "./pages/HomePage";
import Maps from "./components/Maps";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SourceContext } from "./context/SourceContext";
import { DestinationContext } from "./context/DestinationContext";
import { MoralisProvider } from "react-moralis";

function App() {
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  return (
    <MoralisProvider initializeOnMount={false}>
      <SourceContext.Provider value={{ source, setSource }}>
        <DestinationContext.Provider value={{ destination, setDestination }}>
          <div>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/rider" element={<RiderPage />} />
              </Routes>
            </Router>
          </div>
        </DestinationContext.Provider>
      </SourceContext.Provider>
    </MoralisProvider>
  );
}

export default App;
