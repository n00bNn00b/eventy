import React from "react";
import { Route, Routes } from "react-router-dom";
import Event from "./components/Event/Event";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
