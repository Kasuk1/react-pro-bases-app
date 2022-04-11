import { useReducer } from 'react';

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: 'increaseBy'; payload: { value: number } }
  | { type: 'reset' };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'increaseBy':
      return {
        ...state,
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      };

    case 'reset':
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      };

    default:
      return state;
  }
};

export const CounterReducer = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };

  return (
    <>
      <h1>Counter Reducer:</h1>
      <p>Counter: {counter}</p>
      <p>Previous: {previous}</p>
      <p>Counter: {changes}</p>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
};
