import { render, screen } from "@testing-library/react"
import App from "../App"

describe('App component', () => {
    test('should render a card', () => {
        render(<App />)
        const card = screen.getByTestId('card');
        expect(card).not.toBeNull();
    })
})