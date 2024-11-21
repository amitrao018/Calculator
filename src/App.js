import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const output = eval(input); // Safely evaluates the expression (BODMAS supported)
        if (output === Infinity) {
          setResult("Infinity");
        } else {
          setResult(output.toString());
        }
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        className="calculator-input"
      />
      <div className="result">{result}</div>
      <div className="button-container">
        {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
