# React: Bank Account with `useReducer` hook

<img alt='screen capture' src="/assets/abcBank.gif"></div>

## 🎯 Key technique

- Used the useReducer hook to manage state with reducer functions.
- Used `dispatch`, `action`, and `reducer` to update state

## 🔆 `useReducer` vs. `useState`

The `useReducer` hook serves as an advanced alternative to `useState`. It facilitates the management of state in a more centralized manner, moving state logic out of individual components and handle it at a higher level of the component hierarchy. To fully comprehend useReducer, it's essential to grasp three fundamental elements.

<img alt='screen capture' src="/assets/bank.png"></div>

1. Reducer: The concept of a reducer can be likened to a bank in analogy. When Kevin makes a deposit or withdrawal, it's like giving instructions to the bank. The bank will then adjust the account balance accordingly. The part corresponding to the bank is precisely the role of the Reducer. The Reducer is updating the account balance based on Kevin's request.

2. Dispatch: The request Kevin ask to deposit or withdraw money from his account are precisely what calls dispatch.

3. Action: The specific instructions Kevin gives, such as "Deposit $100" or "Withdraw $50," constitute actions. These actions specify the details of Kevin's financial transactions.
