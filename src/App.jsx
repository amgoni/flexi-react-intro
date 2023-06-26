import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stories from "./components/Stories";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stories />
    </div>
  );
};

export default App;
