import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create/Create";
import Event from "./components/Event/Event";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
