import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Pocetna } from "./pages/Pocetna";
import { History } from "./pages/History";
import { Breath } from "./pages/Breath";

function App () {
  return (
    <div className="bg-black">
       <HashRouter>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/history" element={<History />} />
          <Route path="/breathPage" element={<Breath src={"string"} />} />
        </Routes>
        
      </HashRouter>
    </div>
  );
}

export default App;
