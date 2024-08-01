import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Citizens from "./components/Citizens";

function App() {
  return (
    <div className="container">
      <h1>Citizen Management System</h1>
      <Citizens />
    </div>
  );
}

export default App;
