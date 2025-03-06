import { useDispatch, useSelector } from 'react-redux';
import style from './App.module.css';
import {
  decrement,
  increment,
  incrementByAmount,
} from './features/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  function handleIncrementByAmount() {
    setInput(0);
    dispatch(incrementByAmount(input));
  }

  return (
    <main className={style.main}>
      <h1>Redux Toolkit with JS</h1>
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
