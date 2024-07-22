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
    <Card>
      <Card.Body>
        <p className="text text-primary">{counter}</p>
      </Card.Body>
      <Card.Footer>
        <Button onClick={decrement}>-</Button>
        <Button onClick={increment}>+</Button>
        <Button onClick={reroll}>Reroll</Button>
      </Card.Footer>
    </Card>
  );
}

export default App;
