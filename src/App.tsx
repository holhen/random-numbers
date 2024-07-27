import { useCallback, useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card"
import CardBody from "./components/CardBody/CardBody";
import CardFooter from "./components/CardFooter/CardFooter";
import { getRandomNumber } from "./utils";

function App() {
    const start = 1;
    const end = 99;
    const initialNumber = getRandomNumber(start, end);
    const [currentNumber, setCurrentNumber] = useState(initialNumber);

    const increment = useCallback(() => {
        setCurrentNumber(prev => prev + 1);
    }, []);

    const decrement = useCallback(() => {
        setCurrentNumber(prev => prev - 1);
    }, []);

    const reroll = useCallback(() => {
        const newNumber = getRandomNumber(start, end);
        setCurrentNumber(newNumber);
    }, [])

    return (
        <Card>
            <CardBody>{currentNumber}</CardBody>
            <CardFooter>
                <Button onClick={decrement} disabled={currentNumber <= 1} data-testid="decrement">-</Button>
                <Button onClick={increment} disabled={currentNumber >= 99} data-testid="increment">+</Button>
                <Button onClick={reroll} data-testid="reroll">Reroll</Button>
            </CardFooter>
        </Card>
    );
}

export default App
