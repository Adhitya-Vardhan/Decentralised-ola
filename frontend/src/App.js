import "./App.css";
import React, { useState } from "react";
import RiderPage from "./pages/RiderPage";
import HomePage from "./pages/HomePage";
import Maps from "./components/Maps";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SourceContext } from "./context/SourceContext";
import { DestinationContext } from "./context/DestinationContext";
import { MoralisProvider } from "react-moralis";
import DriverPage from "./pages/DriverPage";
import { LoadScript } from "@react-google-maps/api";
import { EventsContext } from "./context/EventsContext";

function App() {
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  const [eve, setEve] = useState();
  return (
    <MoralisProvider initializeOnMount={false}>
      <SourceContext.Provider value={{ source, setSource }}>
        <DestinationContext.Provider value={{ destination, setDestination }}>
          <EventsContext.Provider value={{ eve, setEve }}>
            <LoadScript
              libraries={["places"]}
              googleMapsApiKey={process.env.REACT_APP_MAP_KEY}
            >
              <div>
                <Router>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/rider" element={<RiderPage />} />
                    <Route path="/drive" element={<DriverPage />} />
                  </Routes>
                </Router>
              </div>
            </LoadScript>
          </EventsContext.Provider>
        </DestinationContext.Provider>
      </SourceContext.Provider>
    </MoralisProvider>
  );
}

export default App;
