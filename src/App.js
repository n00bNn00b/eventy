import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create/Create";
import Event from "./components/Event/Event";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
