import React from "react";

// initialize Context
// equivalent to the createStore method of Redux
export const CounterContext = React.createContext();

const CounterProvider = () => {
  const [counter, setCounter] = React.useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      <Counter />
    </CounterContext.Provider>
  );
};

// provider
export const Counter = () => {
  const { counter, increment, decrement } = React.useContext(CounterProvider);
  return (
    <>
      <h1 date-testid="counter"> {counter} </h1>
      <button data-testid="button-up" onClick={increment}>
        Up
      </button>
      <button data-testid="button-down" onClick={decrement}>
        Down
      </button>
    </>
  );
};

export default CounterProvider;
