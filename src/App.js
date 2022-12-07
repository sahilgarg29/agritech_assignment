import "./styles.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SecondPage from "./SecondPage";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} />} />
        <Route path="/second-page" element={<SecondPage count={count} />} />
      </Routes>
    </div>
  );
}
