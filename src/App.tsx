import { useState } from 'react';
import { getRandomNumber } from './utils';
import { Button, Card } from 'react-bootstrap';
import './App.css';

function App() {
  const initialNumber = getRandomNumber();
  const [counter, setCounter] = useState(initialNumber);

  const reroll = () => {
    const number = getRandomNumber();
    setCounter(number);
  };

  const increment = () => {
    if (counter < 99) {
      setCounter((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <Card data-testid="card">
      <Card.Body>
        <p className="text text-primary" data-testid="counter">{counter}</p>
      </Card.Body>
      <Card.Footer>
        <Button onClick={decrement} data-testid="decrement">-</Button>
        <Button onClick={increment} data-testid="increment">+</Button>
        <Button onClick={reroll} data-testid="reroll">Reroll</Button>
      </Card.Footer>
    </Card>
  );
}

export default App;
