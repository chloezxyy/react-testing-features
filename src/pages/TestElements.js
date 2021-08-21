import React from "react";

const TestElements = () => {
  const [counter, setCounter] = React.useState(0);
  const delayCount = () => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 500);
  };

  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={() => setCounter(counter + 1)}>
        {" "}
        Up
      </button>
      <button data-testid="button-up-delay" onClick={delayCount}>
        {" "}
        Delay Up
      </button>
      <button
        // disabled
        data-testid="button-down"
        onClick={() => setCounter(counter - 1)}
      >
        Down
      </button>
    </>
  );
};

export default TestElements;
