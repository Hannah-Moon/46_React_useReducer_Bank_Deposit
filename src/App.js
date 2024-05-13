import "./App.css";
import React, { useState, useReducer } from "react";

// reducer - update 'state' bank
// dispatch - tool to update 'state'
// action - request item

const reducer = (state, action) => {
  console.log("reducer is working to update 'state' bank!", state, action);
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <h2 className="bank">Your ABC Bank Account</h2>
      <p className="balance">Balace: ${money}</p>
      <input
        placeholder="Please enter amount"
        className="input"
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="10"
      />
      <div className="btnContainer">
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "deposit", payload: number });
          }}
        >
          Deposit
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "withdraw", payload: number });
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default App;
