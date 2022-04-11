import { useReducer } from 'react';
import { doIncreaseBy, doReset } from './actions/actions';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerStructured = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const increaseBy = (value: number) => {
    dispatch(doIncreaseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer Structured:</h1>
      <p>Counter: {counter}</p>
      <p>Previous: {previous}</p>
      <p>Counter: {changes}</p>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={() => dispatch(doReset())}>Reset</button>
    </>
  );
};
