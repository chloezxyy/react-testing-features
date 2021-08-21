import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { initialState, reducer } from "../store/reducer";
import TestRedux from "../TestRedux";

// Helper function  to render the component
// receives paarams to render - 1. initial state and 2.store
// if no store, creates a new one
// if doesn't receive initial state or a store, returns an empty object
const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

afterEach(cleanup);

it("checks initial state is equal to 0", () => {
  const { getByTestId } = renderWithRedux(<TestRedux />);
  console.log("getByTestId", getByTestId);
  expect(getByTestId("counter")).toHaveTextContent("0");
});
it("increments counter through redux", () => {
  const { getByTestId } = renderWithRedux(<TestRedux />, {
    initialState: { count: 99 },
  });
  fireEvent.click(getByTestId("button-up"));
  expect(getByTestId("counter")).toHaveTextContent("100");
});
it("decrements counter through redux", () => {
  const { getByTestId } = renderWithRedux(<TestRedux />, {
    initialState: { count: 100 },
  });
  fireEvent.click(getByTestId("button-down"));
  expect(getByTestId("counter")).toHaveTextContent("99");
});
