import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

const App = () => {
  return (
    <div className="w-full h-screen text-white">
      <Navbar />
      <Landing/>
    </div>
  );
};

export default App;
