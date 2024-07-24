import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import {getRandomNumber} from "../utils";

const initialNumber = 10;
jest.mock('../utils', () => ({
    getRandomNumber: jest.fn()
}))

describe('App component', () => {

    test('should render a card', () => {
        (getRandomNumber as jest.Mock).mockReturnValueOnce(initialNumber);
        render(<App />);
        const card = screen.getByTestId('card');
        expect(card).not.toBeNull();
    });
    test('should render a counter', () => {
        (getRandomNumber as jest.Mock).mockReturnValueOnce(initialNumber);
        render(<App />)
        const counter = parseInt(screen.getByTestId('counter').textContent as string);
        expect(counter).toEqual(10);
    })
    test('should increment counter', () => {
        (getRandomNumber as jest.Mock).mockReturnValueOnce(initialNumber);
        render(<App />);
        const incrementButton = screen.getByTestId('increment');

        fireEvent.click(incrementButton);
        const newCounter = parseInt(screen.getByTestId('counter').textContent as string);
        expect(newCounter).toEqual(11);
    })
    test('should decrement counter', () => {
        (getRandomNumber as jest.Mock).mockReturnValueOnce(initialNumber);
        render(<App />);
        const decrementButton = screen.getByTestId('decrement');

        fireEvent.click(decrementButton);
        const newCounter = parseInt(screen.getByTestId('counter').textContent as string);
        expect(newCounter).toEqual(9);
    })
    test('should generate a new random number', () => {
        render(<App />);
        const rerollButton = screen.getByTestId('reroll');
        const newNumber = 42;
        (getRandomNumber as jest.Mock).mockReturnValueOnce(newNumber);
        fireEvent.click(rerollButton);
        const newCounter = parseInt(screen.getByTestId('counter').textContent as string);
        expect(newCounter).toEqual(newNumber);
    })
})