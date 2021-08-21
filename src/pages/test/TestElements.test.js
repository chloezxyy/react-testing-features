import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from "@testing-library/react";
import TestElements from "../TestElements";

afterEach(cleanup);

// it("should take a snapshot", () => {
//   // destructuring assignment to retrieve values from obj or arr
//   const { asFragment } = render(<TestElements />);
//   expect(asFragment(<TestElements />)).toMatchSnapshot();
// });
it("should equal to 0", () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("counter")).toHaveTextContent(0);
});
it("should be enabled", () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
});
// it("should be disabled", () => {
//   const { getByTestId } = render(<TestElements />);
//   expect(getByTestId("button-down")).toBeDisabled();
// });
it("increments counter", () => {
  const { getByTestId } = render(<TestElements />);
  fireEvent.click(getByTestId("button-up"));
  expect(getByTestId("counter")).toHaveTextContent(1);
});
it("decrements counter", () => {
  const { getByTestId } = render(<TestElements />);
  fireEvent.click(getByTestId("button-down"));
  expect(getByTestId("counter")).toHaveTextContent(-1);
});
it("increments counter after 0.5s", async () => {
  const { getByTestId, getByText } = render(<TestElements />);
  fireEvent.click(getByTestId("button-up-delay"));
  const counter = await waitForElement(() => getByText("1"));
  expect(counter).toHaveTextContent(1);
});
