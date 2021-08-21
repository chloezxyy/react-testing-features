import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ChildComponent from "../ChildComponent";

describe("ChildComponent", () => {
  it("should load successfully", async () => {
    let mockFunction = jest
      .fn()
      .mockReturnValue(Promise.resolve({ title: "Replaced" }));
    act(() => {
      render(<ChildComponent getDataFromAPI={mockFunction} />);
    });
    expect(screen.getByText(/Initial/i)).toBeInTheDocument();
    let button = screen.getByRole("button");
    await act(async () => {
      fireEvent.click(button);
    });
    expect(screen.getByText(/Replaced/i)).toBeInTheDocument();
  });
});
