import "./App.css";
import React, { useState, useReducer } from "react";

// reducer - update 'state' bank
// dispatch - tool to update 'state'
// action - request item

const reducer = (state, action) => {
  console.log("reducer is working to update 'state' bank!", state, action);
  console.log(state);
  switch (action.type) {
    case "deposit":
      console.log(state, action.payload);
      return Number(state + action.playload);
    case "withdraw":
      return state - action.playload;
    default:
      return state;
  }
};

function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <h2>Thanks for visiting ABC Bank</h2>
      <p>Balace: ${money}</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="10"
      />

      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
        }}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdraw", payload: number });
        }}
      >
        Withdraw
      </button>
    </div>
  );
}

export default App;
