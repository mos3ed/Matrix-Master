import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Quote Generator</h1>

      <div className="quote-box">
        <p className="quote">
          "India is the meeting place of the religions and among these Hinduism
          alone is by itself a vast and complex thing, not so much a religion as
          a great diversified and yet subtly unified mass of spiritual thought,
          realization and aspiration."
        </p>

        <p className="author">Sri Aurobindo</p>
      </div>

      <button className="btn">New Quote</button>
    </div>
  );
}

export default App;
