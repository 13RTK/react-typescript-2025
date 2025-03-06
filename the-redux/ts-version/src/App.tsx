import style from './App.module.css';
import {
  decrement,
  increment,
  incrementByAmount,
} from './features/counterSlice';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<number>(0);

  function handleIncrementByAmount() {
    setInput(0);
    dispatch(incrementByAmount(input));
  }

  return (
    <main className={style.main}>
      <h1>Redux Toolkit with TS</h1>
      <section>
        <button onClick={() => dispatch(decrement())}>-</button>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
      </section>

      <br />
      <section>
        <input value={input} onChange={(e) => setInput(+e.target.value)} />
        <button onClick={handleIncrementByAmount}>Add by {input}</button>
      </section>
    </main>
  );
}
export default App;
