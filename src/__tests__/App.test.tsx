import { render, screen, fireEvent } from "@testing-library/react"
import App from "../App"

describe('App component', () => {
    test('should render a card', () => {
        render(<App />);
        const card = screen.getByTestId('card');
        expect(card).not.toBeNull();
    });
    test('should render a counter', () => {
        render(<App />)
        const counter = screen.getByTestId('counter').textContent;
        expect(counter).not.toBeNull();
    })
    test('should increment counter', () => {
        render(<App />);
        const counter = parseInt(screen.getByTestId('counter').textContent ?? '0');
        const incrementButton = screen.getByTestId('increment');

        fireEvent.click(incrementButton);
        const newCounter = parseInt(screen.getByTestId('counter').textContent ?? '0');
        expect(newCounter - counter).toEqual(1);
    })
    test('should decrement counter', () => {
        render(<App />);
        const counter = parseInt(screen.getByTestId('counter').textContent ?? '0');
        const decrementButton = screen.getByTestId('decrement');

        fireEvent.click(decrementButton);
        const newCounter = parseInt(screen.getByTestId('counter').textContent ?? '0');
        expect(counter - newCounter).toEqual(1);
    })
    test('should generate a new random number', () => {
        render(<App />);
        const counter = parseInt(screen.getByTestId('counter').textContent ?? '0');
        const rerollButton = screen.getByTestId('reroll');

        fireEvent.click(rerollButton);
        const newCounter = parseInt(screen.getByTestId('counter').textContent ?? '0');
        expect(newCounter).not.toEqual(counter);
    })
})