import { render, screen, fireEvent } from "@testing-library/react";
import { getRandomNumber } from "../utils";
import App from "../App";

const initialNumber = 10;
jest.mock("../utils", () => ({
  getRandomNumber: jest.fn(),
}));

describe("App component", () => {
  (getRandomNumber as jest.Mock).mockReturnValue(initialNumber);
  const getCounterValue = () =>
    parseInt(screen.getByTestId("counter").textContent as string);
  test("should render a card", () => {
    render(<App />);
    const card = screen.getByTestId("card");
    expect(card).not.toBeNull();
  });
  test("should render a counter", () => {
    render(<App />);
    const counter = getCounterValue();
    expect(counter).toEqual(10);
  });
  test("should increment counter", () => {
    render(<App />);
    const incrementButton = screen.getByTestId("increment");

    fireEvent.click(incrementButton);
    const newCounter = getCounterValue();
    expect(newCounter).toEqual(11);
  });
  test("should decrement counter", () => {
    render(<App />);
    const decrementButton = screen.getByTestId("decrement");

    fireEvent.click(decrementButton);
    const newCounter = getCounterValue();
    expect(newCounter).toEqual(9);
  });
  test("should generate a new random number", () => {
    render(<App />);
    const rerollButton = screen.getByTestId("reroll");
    const newNumber = 42;
    (getRandomNumber as jest.Mock).mockReturnValueOnce(newNumber);
    fireEvent.click(rerollButton);
    const newCounter = getCounterValue();
    expect(newCounter).toEqual(newNumber);
  });
});
